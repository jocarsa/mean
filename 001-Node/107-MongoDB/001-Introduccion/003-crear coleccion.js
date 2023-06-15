const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "blognodejs";

MongoClient.connect(url, function (err, client) {
  if (err) {
    console.error("Failed to connect to MongoDB:", err);
    return;
  }

  console.log("Connected to MongoDB");

  const db = client.db(dbName);

  db.createCollection("entradas", function (err, res) {
    if (err) {
      console.error("Failed to create collection:", err);
      client.close();
      return;
    }

    client.close();
    console.log("Collection 'entradas' created successfully.");
  });
});