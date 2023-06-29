const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/aplicacion"; 

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa");
    ////////
    const entradas = mongoose.model("clientes", new mongoose.Schema({
      nombre: String,
      edad: Number,
        apellidos:String,
        correo:String
    }));

    const documento = new entradas({ 
        nombre: "Jose Vicente", 
        edad: 45 ,
        apellidos:"Carratala Sanchis",
        correo:"info@josevicentecarratala.com"
    });

    documento.save()
      .finally(() => mongoose.connection.close());
    ////////
    
  })
  .catch((err) => console.error("Error de conexión:", err));