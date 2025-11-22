from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import subprocess
import json
import ast
from collections import defaultdict

app = Flask(__name__)
# Enable CORS for development. In production, restrict origins as appropriate.
CORS(app)

# === MongoDB Configuration ===
client = MongoClient("mongodb://localhost:27018/")  # adjust port if needed
db = client["SML"]
collection = db["sampledata"]

@app.route("/query", methods=["POST"])
def query_data():
    try:
        user_data = request.get_json()
        user_prompt = user_data.get("prompt", "").strip()

        if not user_prompt:
            return jsonify({"error": "Prompt cannot be empty."}), 400

        # === Step 1: Ask Ollama to generate MongoDB query ===
        instruction = f"""
        You are an expert MongoDB query generator.
        Based on the following user prompt, write a VALID MongoDB aggregation query or filter
        to fetch the relevant data from MongoDB.

        The MongoDB database and collection details:
        - Database name: "SML"
        - Collection name: "sampledata"

        The documents in the collection look like this:
        {{
          "_id": "...",
          "Country": "France",
          "Keyword": "Asthma improved",
          "Source": "clinicaltrials",
          "Subtheme": "Positive",
          "Theme": "Sentiment",
          "comment_body": "...",
          "post_title": "...",
          "sentiment": "Neutral",
          "Stakeholder": "Patients",
          "drugs_name": "AirDuo Digihaler (Fluticasone , Salmeterol)"
        }}

        The user may ask for data filtered by:
        - Country
        - Stakeholder
        - Drug name
        - Sentiment
        - Source
        or any logical combination.

        Return ONLY a valid MongoDB **find() filter object or aggregation pipeline** (in pure Python dict format).
        Do not include explanations, text, or markdown.
        Example output:
        {{"Country": "France", "sentiment": "Positive"}}

        User prompt: "{user_prompt}"
        """

        # === Step 2: Call Ollama API ===
        curl_command = [
            "curl", "-s", "-X", "POST", "https://ollama.com/api/chat",
            "-H", "Authorization: Bearer f8db447ca1244b7cbd24ef57d0a5d0ac.YTvI-pVSXYDLyxiWywB4QfOb",
            "-H", "Content-Type: application/json",
            "-H", "Cookie: aid=ba14a101-09b7-4628-8369-ce2808cbc8b7",
            "-d", json.dumps({
                "model": "deepseek-v3.1:671b",
                "messages": [{"role": "user", "content": instruction}],
                "stream": False
            })
        ]

        result = subprocess.run(curl_command, capture_output=True, text=True)
        response_text = result.stdout.strip()

        print("🧠 Ollama raw response:", response_text)

        try:
            res_json = json.loads(response_text)
        except Exception:
            res_json = {}

        # Extract model reply
        llm_reply = ""
        if "message" in res_json and "content" in res_json["message"]:
            llm_reply = res_json["message"]["content"]
        elif "response" in res_json:
            llm_reply = res_json["response"]
        else:
            llm_reply = str(res_json)

        print("🧩 Parsed LLM reply:", llm_reply)

        # === Step 3: Parse the MongoDB query/filter ===
        try:
            mongo_query = ast.literal_eval(llm_reply)
        except Exception:
            mongo_query = {}

        print("📊 MongoDB Query:", mongo_query)

        # === Step 4: Fetch data ===
        if isinstance(mongo_query, list):
            docs = list(collection.aggregate(mongo_query))
        elif isinstance(mongo_query, dict):
            docs = list(collection.find(mongo_query))
        else:
            return jsonify({"error": "Invalid query structure returned by Ollama."}), 500

        if not docs:
            return jsonify({"message": "No data found.", "query_used": mongo_query})

        # === Step 5: Aggregate and format response ===
        def sentiment_count():
            return {"Positive": 0, "Negative": 0, "Neutral": 0}

        data_summary = defaultdict(lambda: {"mentions": 0, "sentiment": sentiment_count()})

        for doc in docs:
            drug = doc.get("drugs_name", "Unknown")
            sentiment = doc.get("sentiment", "Neutral")
            data_summary[drug]["mentions"] += 1
            data_summary[drug]["sentiment"][sentiment] += 1

        # Generate heading using Ollama
        heading_instruction = f"""
        Based on this MongoDB query {mongo_query}, generate a clear, concise heading that describes the data.
        The heading should be brief (5-10 words) and highlight the key filters being used.
        Example: "Positive Sentiment Analysis for Fluticasone in United States"
        Return ONLY the heading text, no quotes or explanation.
        """
        
        heading_command = [
            "curl", "-s", "-X", "POST", "https://ollama.com/api/chat",
            "-H", "Authorization: Bearer f8db447ca1244b7cbd24ef57d0a5d0ac.YTvI-pVSXYDLyxiWywB4QfOb",
            "-H", "Content-Type: application/json",
            "-H", "Cookie: aid=ba14a101-09b7-4628-8369-ce2808cbc8b7",
            "-d", json.dumps({
                "model": "deepseek-v3.1:671b",
                "messages": [{"role": "user", "content": heading_instruction}],
                "stream": False
            })
        ]
        
        heading_result = subprocess.run(heading_command, capture_output=True, text=True)
        try:
            heading_json = json.loads(heading_result.stdout.strip())
            heading = heading_json.get("message", {}).get("content", "") or heading_json.get("response", "")
            heading = heading.strip().strip('"').strip("'")
        except Exception:
            heading = "Drug Analysis Results"

        formatted = [
            {
                "drug_name": drug,
                "mentions": vals["mentions"],
                "sentiment": vals["sentiment"]
            }
            for drug, vals in data_summary.items()
        ]

        response_data = {
            "query_used": mongo_query,
            "heading": heading,
            "results": formatted
        }

        return jsonify(response_data)

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
