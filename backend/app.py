from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
# Configure CORS for development. You can set FRONTEND_ORIGIN to a specific
# origin (e.g. http://localhost:5173) in the environment; default allows
# all origins which is convenient for local development.
FRONTEND_ORIGIN = os.getenv("FRONTEND_ORIGIN", "*")
# Allow API routes and the /query endpoint to be called from the frontend.
CORS(app, resources={r"/api/*": {"origins": FRONTEND_ORIGIN}, r"/query": {"origins": FRONTEND_ORIGIN}}, supports_credentials=True)

# MongoDB connection (local)
MONGO_URI = "mongodb://localhost:27017/"
client = MongoClient(MONGO_URI)
db = client["SMLBE"]
collection = db["asthemaTypeAttributeData"]
collection_stakeholder = db["asthmaTypeStakeholderData"]
collection_drug = db["drugStakeholderData"]
collection_patient_remarks = db["patientJourneyStageRemarks"]
collection_sample_counts = db["sampleMentionsCount"]
collection_drug_class_split = db["drugClassSplit"]
collection_country_drug_class_map = db["countryDrugClassMap"]
collection_source_split = db["sourceSplit"]
collection_geography_split = db["geographySplit"]
collection_stakeholder_split = db["stakeholderSplit"]
collection_sentiment_pie_data = db["sentimentPieData"]
@app.route("/api/sentiment-pie-data", methods=["GET"])
def get_sentiment_pie_data():
	"""Return sentiment pie chart data from sentimentPieData collection."""
	try:
		total = collection_sentiment_pie_data.count_documents({})
		if total == 0:
			return jsonify({}), 200

		doc = collection_sentiment_pie_data.find_one()
		doc_serial = serialize_doc(doc)
		doc_serial.pop("_id", None)
		return jsonify(doc_serial), 200
	except Exception as e:
		return jsonify({"error": str(e)}), 500
collection_patient_journey = db["patientJourney"]


def serialize_doc(doc):
	"""Convert Mongo document to JSON-serializable dict."""
	if not doc:
		return doc
	doc = dict(doc)
	_id = doc.pop("_id", None)
	if _id is not None:
		doc["_id"] = str(_id)
	return doc


@app.route("/api/asthma-attributes", methods=["GET"])
def get_asthma_attributes():
	"""Return asthma attribute data.

	If the collection contains a single document that is the exported object
	(e.g. a single JSON object keyed by country names), return that document
	(without the internal `_id`). Otherwise return a list of documents.
	Optionally filter by country using `?country=All` query param when the
	collection stores a single structured document.
	"""
	try:
		total = collection.count_documents({})
		country = request.args.get("country")

		if total == 0:
			# return an empty list when no documents found
			return jsonify([]), 200

		if total == 1:
			doc = collection.find_one()
			doc_serial = serialize_doc(doc)
			# If a country filter requested and the doc is a mapping, return that key
			if country and isinstance(doc_serial, dict):
				return jsonify(doc_serial.get(country, {}))
			# remove internal _id if present
			if "_id" in doc_serial:
				doc_serial.pop("_id", None)
			return jsonify(doc_serial)

		# multiple documents -> return list
		docs = list(collection.find())
		return jsonify([serialize_doc(d) for d in docs])
	except Exception as e:
		return jsonify({"error": str(e)}), 500


@app.route("/api/asthma-attributes/<id>", methods=["GET"])
def get_asthma_attribute_by_id(id):
	try:
		doc = collection.find_one({"_id": ObjectId(id)})
		if not doc:
			return jsonify({"error": "Not found"}), 404
		return jsonify(serialize_doc(doc))
	except Exception as e:
		return jsonify({"error": str(e)}), 400



@app.route("/api/asthma-stakeholders", methods=["GET"])
def get_asthma_stakeholders():
	"""Return asthma stakeholder data.

	Similar behavior to `/api/asthma-attributes`: supports returning a single
	structured document keyed by country, or a list of documents. Use `?country=`
	to fetch a specific country's grouping when collection stores a single object.
	"""
	try:
		total = collection_stakeholder.count_documents({})
		print("Total stakeholder documents:", total)
		country = request.args.get("country")

		if total == 0:
			# return an empty list when no documents found
			return jsonify([]), 200

		if total == 1:
			doc = collection_stakeholder.find_one()
			doc_serial = serialize_doc(doc)
			if country and isinstance(doc_serial, dict):
				return jsonify(doc_serial.get(country, {}))
			if "_id" in doc_serial:
				doc_serial.pop("_id", None)
			return jsonify(doc_serial)

		# multiple documents -> return list
		docs = list(collection_stakeholder.find())
		return jsonify([serialize_doc(d) for d in docs])
	except Exception as e:
		return jsonify({"error": str(e)}), 500


@app.route("/api/asthma-stakeholders/<id>", methods=["GET"])
def get_asthma_stakeholder_by_id(id):
	try:
		doc = collection_stakeholder.find_one({"_id": ObjectId(id)})
		if not doc:
			return jsonify({"error": "Not found"}), 404
		return jsonify(serialize_doc(doc))
	except Exception as e:
		return jsonify({"error": str(e)}), 400


@app.route("/api/drug-stakeholders", methods=["GET"])
def get_drug_stakeholders():
	"""Return drug stakeholder data.

	Supports single-document mapping keyed by country (returns mapping or a
	specific country via `?country=`) or a list of documents.
	"""
	print("Fetching drug stakeholders")
	try:
		total = collection_drug.count_documents({})
		country = request.args.get("country")

		if total == 0:
			return jsonify([]), 200

		if total == 1:
			doc = collection_drug.find_one()
			doc_serial = serialize_doc(doc)
			if country and isinstance(doc_serial, dict):
				return jsonify(doc_serial.get(country, {}))
			if "_id" in doc_serial:
				doc_serial.pop("_id", None)
			return jsonify(doc_serial)

		# multiple documents -> return list
		docs = list(collection_drug.find())
		return jsonify([serialize_doc(d) for d in docs])
	except Exception as e:
		return jsonify({"error": str(e)}), 500


@app.route("/api/drug-stakeholders/<id>", methods=["GET"])
def get_drug_stakeholder_by_id(id):
	try:
		doc = collection_drug.find_one({"_id": ObjectId(id)})
		if not doc:
			return jsonify({"error": "Not found"}), 404
		return jsonify(serialize_doc(doc))
	except Exception as e:
		return jsonify({"error": str(e)}), 400


@app.route("/api/patient-journey-remarks", methods=["GET"])
def get_patient_journey_remarks():
    """Return patient journey stage remarks.

    If the collection contains a single document (mapping of stage -> remarks),
    return that mapping (or a specific stage via `?stage=`). Otherwise return list
    of documents.
    """
    try:
        total = collection_patient_remarks.count_documents({})
        stage = request.args.get("stage")

        if total == 0:
            return jsonify([]), 200

        if total == 1:
            doc = collection_patient_remarks.find_one()
            doc_serial = serialize_doc(doc)
            if stage and isinstance(doc_serial, dict):
                return jsonify(doc_serial.get(stage, {}))
            if "_id" in doc_serial:
                doc_serial.pop("_id", None)
            return jsonify(doc_serial)

        # multiple documents -> return list
        docs = list(collection_patient_remarks.find())
        return jsonify([serialize_doc(d) for d in docs])
    except Exception as e:
        return jsonify({"error": str(e)}), 500



@app.route("/api/patient-journey-remarks/<id>", methods=["GET"])
def get_patient_journey_remark_by_id(id):
    try:
        doc = collection_patient_remarks.find_one({"_id": ObjectId(id)})
        if not doc:
            return jsonify({"error": "Not found"}), 404
        return jsonify(serialize_doc(doc))
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/api/patient-journey", methods=["GET"])
def get_patient_journey():
	"""Return numeric patient journey stage data.

	If the collection contains a single document (mapping or array), return
	that document. Otherwise return a list of documents. Returns empty list
	when collection is empty.
	"""
	try:
		total = collection_patient_journey.count_documents({})
		if total == 0:
			return jsonify([]), 200

		docs = list(collection_patient_journey.find())
		# single document -> return it after serialization
		if len(docs) == 1:
			doc = serialize_doc(docs[0])
			doc.pop("_id", None)
			return jsonify(doc), 200

		# multiple documents -> return list
		serialized = []
		for d in docs:
			s = serialize_doc(d)
			s.pop("_id", None)
			serialized.append(s)
		return jsonify(serialized), 200
	except Exception as e:
		return jsonify({"error": str(e)}), 500


@app.route("/api/sample-mentions-count", methods=["GET"])
def get_sample_mentions_count():
	"""Return sample mentions counts from Mongo collection `sampleMentionsCount`.

	If the collection contains a single document, return it. If multiple
	documents exist, return the first one. If empty, return an empty object.
	"""
	try:
		total = collection_sample_counts.count_documents({})
		if total == 0:
			return jsonify({}), 200

		if total >= 1:
			doc = collection_sample_counts.find_one()
			doc_serial = serialize_doc(doc)
			# remove internal _id if present
			doc_serial.pop("_id", None)
			return jsonify(doc_serial), 200

	except Exception as e:
		return jsonify({"error": str(e)}), 500


@app.route("/api/drug-class-split", methods=["GET"])
def get_drug_class_split():
	"""Return all documents in `drugClassSplit` collection as a list."""
	try:
		docs = list(collection_drug_class_split.find())
		serialized = []
		for d in docs:
			s = serialize_doc(d)
			# remove internal _id from client payload
			s.pop("_id", None)
			serialized.append(s)
		return jsonify(serialized), 200
	except Exception as e:
		return jsonify({"error": str(e)}), 500


@app.route("/api/drug-class-split/<id>", methods=["GET"])
def get_drug_class_split_by_id(id):
	try:
		doc = collection_drug_class_split.find_one({"_id": ObjectId(id)})
		if not doc:
			return jsonify({}), 404
		s = serialize_doc(doc)
		s.pop("_id", None)
		return jsonify(s), 200
	except Exception as e:
		return jsonify({"error": str(e)}), 400


@app.route("/api/country-drug-class-map", methods=["GET"])
def get_country_drug_class_map():
	"""Return the country -> drug class mapping.

	If stored as a single mapping document, return that mapping. If stored
	as multiple documents, return a merged mapping or list depending on storage.
	"""
	try:
		total = collection_country_drug_class_map.count_documents({})
		if total == 0:
			return jsonify({}), 200

		if total == 1:
			doc = collection_country_drug_class_map.find_one()
			doc_serial = serialize_doc(doc)
			if "_id" in doc_serial:
				doc_serial.pop("_id", None)
			return jsonify(doc_serial), 200

		# multiple documents: merge into single mapping if possible
		docs = list(collection_country_drug_class_map.find())
		merged = {}
		for d in docs:
			sd = serialize_doc(d)
			sd.pop("_id", None)
			# if doc is itself a mapping, merge keys
			if isinstance(sd, dict):
				for k, v in sd.items():
					merged[k] = v
		return jsonify(merged), 200
	except Exception as e:
		return jsonify({"error": str(e)}), 500


@app.route("/api/country-drug-class-map/<id>", methods=["GET"])
def get_country_drug_class_map_by_id(id):
	try:
		doc = collection_country_drug_class_map.find_one({"_id": ObjectId(id)})
		if not doc:
			return jsonify({}), 404
		s = serialize_doc(doc)
		s.pop("_id", None)
		return jsonify(s), 200
	except Exception as e:
		return jsonify({"error": str(e)}), 400


@app.route("/api/source-split", methods=["GET"])
def get_source_split():
    """Return documents from `sourceSplit` collection.

    If the collection contains a single mapping document, return that mapping
    (or a list/merged array when the mapping values are arrays). Otherwise
    return a list of documents.
    """
    try:
        total = collection_source_split.count_documents({})
        if total == 0:
            return jsonify([]), 200

        if total == 1:
            doc = collection_source_split.find_one()
            doc_serial = serialize_doc(doc)
            if "_id" in doc_serial:
                doc_serial.pop("_id", None)
            return jsonify(doc_serial), 200

        docs = list(collection_source_split.find())
        serialized = []
        for d in docs:
            s = serialize_doc(d)
            s.pop("_id", None)
            serialized.append(s)
        return jsonify(serialized), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/source-split/<id>", methods=["GET"])
def get_source_split_by_id(id):
    try:
        doc = collection_source_split.find_one({"_id": ObjectId(id)})
        if not doc:
            return jsonify({}), 404
        s = serialize_doc(doc)
        s.pop("_id", None)
        return jsonify(s), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/api/geography-split", methods=["GET"])
def get_geography_split():
	"""Return documents from `geographySplit` collection.

	The collection typically stores documents with `country`, `mentions`, and
	`sentiment` fields. If empty return empty list. If multiple documents are
	present return the list. If a single document is present return it (or a
	mapping) — client normalizes both shapes.
	"""
	try:
		total = collection_geography_split.count_documents({})
		country = request.args.get("country")
		if total == 0:
			return jsonify([]), 200

		if total == 1:
			doc = collection_geography_split.find_one()
			doc_serial = serialize_doc(doc)
			if country and isinstance(doc_serial, dict) and "country" in doc_serial:
				# if asked for a specific country and doc is a single doc
				if doc_serial.get("country") == country:
					doc_serial.pop("_id", None)
					return jsonify(doc_serial), 200
				return jsonify([]), 200
			# remove _id and return single doc
			doc_serial.pop("_id", None)
			return jsonify(doc_serial), 200

		# multiple documents
		if country:
			docs = list(collection_geography_split.find({"country": country}))
		else:
			docs = list(collection_geography_split.find())
		serialized = []
		for d in docs:
			s = serialize_doc(d)
			s.pop("_id", None)
			serialized.append(s)
		return jsonify(serialized), 200
	except Exception as e:
		return jsonify({"error": str(e)}), 500


@app.route("/api/geography-split/<id>", methods=["GET"])
def get_geography_split_by_id(id):
	try:
		doc = collection_geography_split.find_one({"_id": ObjectId(id)})
		if not doc:
			return jsonify({}), 404
		s = serialize_doc(doc)
		s.pop("_id", None)
		return jsonify(s), 200
	except Exception as e:
		return jsonify({"error": str(e)}), 400


@app.route("/api/stakeholder-split", methods=["GET"])
def get_stakeholder_split():
	"""Return documents from `stakeholderSplit` collection.

	Supports single-document storage (mapping or single object) and
	multi-document collections. Returns list when multiple documents.
	"""
	try:
		total = collection_stakeholder_split.count_documents({})
		group = request.args.get("group")
		if total == 0:
			return jsonify([]), 200

		if total == 1:
			doc = collection_stakeholder_split.find_one()
			doc_serial = serialize_doc(doc)
			if group and isinstance(doc_serial, dict) and "group" in doc_serial:
				if doc_serial.get("group") == group:
					doc_serial.pop("_id", None)
					return jsonify(doc_serial), 200
				return jsonify([]), 200
			doc_serial.pop("_id", None)
			return jsonify(doc_serial), 200

		# multiple documents
		if group:
			docs = list(collection_stakeholder_split.find({"group": group}))
		else:
			docs = list(collection_stakeholder_split.find())
		serialized = []
		for d in docs:
			s = serialize_doc(d)
			s.pop("_id", None)
			serialized.append(s)
		return jsonify(serialized), 200
	except Exception as e:
		return jsonify({"error": str(e)}), 500


@app.route("/api/stakeholder-split/<id>", methods=["GET"])
def get_stakeholder_split_by_id(id):
	try:
		doc = collection_stakeholder_split.find_one({"_id": ObjectId(id)})
		if not doc:
			return jsonify({}), 404
		s = serialize_doc(doc)
		s.pop("_id", None)
		return jsonify(s), 200
	except Exception as e:
		return jsonify({"error": str(e)}), 400


@app.route("/api/biologics-patient-journey", methods=["GET"])
def get_biologics_patient_journey():

  coll = db["BiologicsPatientJourney"]

  # Exclude _id so frontend doesn't have to handle ObjectId
  docs = list(
    coll.find({}, {"_id": 0})
  )

  # Optional: sort by stage alphabetically or by counts if you want
  # docs.sort(key=lambda d: d.get("stage", ""))

  return jsonify(docs)

if __name__ == "__main__":
	app.run(debug=True, port=5000)
