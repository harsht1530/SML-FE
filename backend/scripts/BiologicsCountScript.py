from pymongo import MongoClient

# -----------------------
# CONFIG
# -----------------------
MONGO_URI = "mongodb://localhost:27017"
DB_NAME = "SMLBE"
COLLECTION_NAME = "DrugsData"

# Biologic list
BIOLOGICS = [
    "Xolair",
    "Nucala",
    "Fasenra",
    "Cinqair",
    "Dupixent",
    "Tezspire"
]

# -----------------------
# Connect to MongoDB
# -----------------------
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
coll = db[COLLECTION_NAME]

# -----------------------
# Count biologic documents
# -----------------------
total = 0
print("\n==============================")
print("Biologics Post Counts")
print("==============================")

for drug in BIOLOGICS:
    count = coll.count_documents({"_source_collection": drug})
    total += count
    print(f"{drug}: {count}")

print("------------------------------")
print(f"TOTAL BIOLOGICS POSTS: {total}")
print("==============================\n")
