const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/traductor"; 

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa");
    ////////
    
    const PalabrasSchema = new mongoose.Schema({
      titulo: String,
      contenido: String,
    });

    const Palabras = mongoose.model("palabras", PalabrasSchema);

    Palabras.find()
      .then((entries) => {
        console.log("He encontrado lo siguiente en Mongo:");
        console.log(entries);
      })
      .catch((err) => {
        console.error("Algo ha fallado:", err);
      })
      .finally(() => mongoose.connection.close());
    
    
    ////////
    
  })
  .catch((err) => console.error("Error de conexión:", err));