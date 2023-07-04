const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const url = "mongodb://127.0.0.1:27017/blog";

// Connect to MongoDB
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa");

    const EntradaSchema = new mongoose.Schema({
      titulo: String,
      contenido: String,
    });

    const Entradas = mongoose.model("entradas", EntradaSchema);

    // Set up routes
    app.get("/", (req, res) => {
      res.send("Welcome to the control panel!");
    });

    // Display all entries
    app.get("/entries", (req, res) => {
      Entradas.find()
        .then((entries) => {
          console.log("He encontrado lo siguiente en Mongo:");
          console.log(entries);
          res.json(entries);
        })
        .catch((err) => {
          console.error("Algo ha fallado:", err);
          res.status(500).json({ error: "Something went wrong" });
        });
    });

    // Create a new entry
    app.post("/entries", (req, res) => {
      const newEntry = new Entradas({
        titulo: req.body.titulo,
        contenido: req.body.contenido,
      });

      newEntry
        .save()
        .then((entry) => {
          console.log("Nueva entrada guardada en la base de datos:");
          console.log(entry);
          res.status(201).json(entry);
        })
        .catch((err) => {
          console.error("Algo ha fallado:", err);
          res.status(500).json({ error: "Something went wrong" });
        });
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => console.error("Error de conexión:", err));