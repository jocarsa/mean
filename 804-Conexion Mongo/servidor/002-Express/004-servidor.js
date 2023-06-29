const express = require("express");
const mongoose = require("mongoose");
const urlnode = require("url");
const cors = require('cors')

const app = express();
const port = 3000;
const url = "mongodb://127.0.0.1:27017/aplicacion";

app.use(cors())

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa");

    const ClienteSchema = new mongoose.Schema({
        nombre: String,
        edad: Number,
        apellidos:String,
        correo:String
    });

    const Clientes = mongoose.model("clientes", ClienteSchema);
    

    app.get("/dame", (req, res) => {
      Clientes.find()
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
    app.get("/toma", (req, res) => {
    var parametros = urlnode.parse(req.url,true).query;
        console.log(parametros)
      const newEntry = new Clientes({
        nombre: parametros.nombre,
        edad: parametros.edad,
          apellidos: parametros.apellidos,
          correo: parametros.correo,
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