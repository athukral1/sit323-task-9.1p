// app/db.js
const { MongoClient } = require("mongodb");

const uri = process.env.DB_URI || "mongodb://admin:password@mongodb-service:27017";
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (e) {
    console.error("MongoDB connection error:", e);
  }
}

module.exports = { connectDB, client };
