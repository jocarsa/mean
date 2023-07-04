const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/blog"; // Replace with your MongoDB server's address, port, and database name

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    const EntradaSchema = new mongoose.Schema({
      title: String,
      content: String,
    });

    const Entrada = mongoose.model("Entrada", EntradaSchema);

    Entrada.find()
      .then((entries) => {
        console.log("Retrieved entries from MongoDB:");
        console.log(entries);
      })
      .catch((err) => {
        console.error("Failed to retrieve entries:", err);
      })
      .finally(() => mongoose.connection.close());
  })
  .catch((err) => {
    console.error("Connection error:", err);
  });
