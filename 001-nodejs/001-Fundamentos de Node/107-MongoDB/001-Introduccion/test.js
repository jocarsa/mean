const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/mydatabase"; // Replace with your MongoDB server's address, port, and database name

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    const entradas = mongoose.model("entradas", new mongoose.Schema({
      name: String,
      age: Number,
    }));

    const document = new entradas({ name: "John", age: 32 });

    document.save()
      .then((result) => console.log("Document saved successfully:", result))
      .catch((err) => console.error("Failed to save document:", err))
      .finally(() => mongoose.connection.close());
  })
  .catch((err) => console.error("Connection error:", err));