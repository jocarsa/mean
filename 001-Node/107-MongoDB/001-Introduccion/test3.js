const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/blog"; // Replace with your MongoDB server's address, port, and database name

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    const EntradasSchema = new mongoose.Schema({
      title: String,
      content: String,
    });

    const Entradas = mongoose.model("Entradas", EntradasSchema);

    const filter = { titulo: "Título de la primera entrada" }; // Specify the condition for matching the document(s) to update
    const update = { titulo: "New Title" }; // Specify the updates to apply

    Entradas.updateMany(filter, update)
      .then((result) => {
        console.log("Updated entries in MongoDB:");
        console.log(result);
      })
      .catch((err) => {
        console.error("Failed to update entries:", err);
      })
      .finally(() => mongoose.connection.close());
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });
