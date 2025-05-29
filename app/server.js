const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(express.json());

const uri = process.env.DB_URI || "mongodb://testuser:testpass@mongodb-service:27017";
const client = new MongoClient(uri);

let collection;

// Connect to MongoDB once and reuse the connection
async function connectToDatabase() {
  try {
    await client.connect();
    const db = client.db("taskDB");
    collection = db.collection("entries");
    console.log("MongoDB connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
}

connectToDatabase();

// Home route
app.get('/', (req, res) => {
  res.send("SIT323 Task 9.1P - MongoDB Full CRUD");
});

// Create route
app.post('/add', async (req, res) => {
  try {
    const result = await collection.insertOne({ name: req.body.name });
    res.status(201).send("Item added");
  } catch (err) {
    res.status(500).send("Insert error: " + err.message);
  }
});

// Read route
app.get('/all', async (req, res) => {
  try {
    const items = await collection.find().toArray();
    res.json(items);
  } catch (err) {
    res.status(500).send("Read error: " + err.message);
  }
});

// Update route
app.put('/update', async (req, res) => {
  try {
    const { oldName, newName } = req.body;
    const result = await collection.updateOne(
      { name: oldName },
      { $set: { name: newName } }
    );
    if (result.modifiedCount === 0) return res.status(404).send("No matching document found to update");
    res.send("Item updated");
  } catch (err) {
    res.status(500).send("Update error: " + err.message);
  }
});

// Delete route
app.delete('/delete', async (req, res) => {
  try {
    const result = await collection.deleteOne({ name: req.body.name });
    if (result.deletedCount === 0) return res.status(404).send("No matching document found to delete");
    res.send("Item deleted");
  } catch (err) {
    res.status(500).send("Delete error: " + err.message);
  }
});


