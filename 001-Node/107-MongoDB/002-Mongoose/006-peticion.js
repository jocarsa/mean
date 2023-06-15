const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/blog"; 

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa");
    ////////
    const entradas = mongoose.model("entradas", new mongoose.Schema({
      nombre: String,
      edad: Number,
    }));

    const documento = new entradas({ nombre: "Jose Vicente", edad: 45 });

    documento.save()
      .finally(() => mongoose.connection.close());
    ////////
    
  })
  .catch((err) => console.error("Error de conexión:", err));