from pymongo import MongoClient

# ---- CONFIG ----
MONGO_URI = "mongodb://localhost:27017"  # change if needed
DB_NAME = "SMLBE"                  # change to your DB name
SOURCE_COLL = "DrugsData"
TARGET_COLL = "BiologicsPatientJourney"

# Only these biologics (match against _source_collection)
BIOLOGICS = [
    "Xolair",
    "Nucala",
    "Fasenra",
    "Cinqair",
    "Dupixent",
    "Tezspire",
]

def main():
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    source = db[SOURCE_COLL]
    target = db[TARGET_COLL]

    # Optional: clear target first so we always have fresh data
    target.delete_many({})

    # Aggregate counts per Attributes (stage) for biologics only
    pipeline = [
        {
            "$match": {
                "_source_collection": {"$in": BIOLOGICS},
                "sentiment": {"$in": ["Positive", "Negative", "Neutral"]},
                "Attributes": {"$ne": None},
            }
        },
        {
            "$group": {
                "_id": "$Attributes",
                "Positive_count": {
                    "$sum": {
                        "$cond": [{"$eq": ["$sentiment", "Positive"]}, 1, 0]
                    }
                },
                "Negative_count": {
                    "$sum": {
                        "$cond": [{"$eq": ["$sentiment", "Negative"]}, 1, 0]
                    }
                },
                "Neutral_count": {
                    "$sum": {
                        "$cond": [{"$eq": ["$sentiment", "Neutral"]}, 1, 0]
                    }
                },
                "total": {"$sum": 1},
            }
        },
    ]

    results = list(source.aggregate(pipeline))

    docs_to_insert = []
    for row in results:
        stage = row["_id"]  # this is Attributes

        pos = row.get("Positive_count", 0)
        neg = row.get("Negative_count", 0)
        neu = row.get("Neutral_count", 0)
        total = row.get("total", 0) or 1  # avoid division by zero

        # Percentages (0–100). Round as you like.
        pos_pct = round((pos / total) * 100, 2)
        neg_pct = round((neg / total) * 100, 2)
        neu_pct = round((neu / total) * 100, 2)

        doc = {
            "stage": stage,            # stage means Attributes
            "Positive": pos_pct,       # percentage
            "Positive_count": pos,     # count
            "Negative": neg_pct,       # percentage
            "Negative_count": neg,     # count
            "Neutral": neu_pct,        # percentage
            "Neutral_count": neu,      # count
        }
        docs_to_insert.append(doc)

    if docs_to_insert:
        target.insert_many(docs_to_insert)
        print(f"Inserted {len(docs_to_insert)} docs into {TARGET_COLL}")
    else:
        print("No biologics data found to insert")

    client.close()

if __name__ == "__main__":
    main()
