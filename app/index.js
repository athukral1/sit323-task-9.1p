// app/index.js
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB, client } = require("./db");

const app = express();
app.use(bodyParser.json());

connectDB();

app.post("/add", async (req, res) => {
  const db = client.db("testDB");
  const collection = db.collection("items");
  await collection.insertOne({ name: req.body.name });
  res.send("Inserted!");
});

app.get("/all", async (req, res) => {
  const db = client.db("testDB");
  const collection = db.collection("items");
  const data = await collection.find().toArray();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
