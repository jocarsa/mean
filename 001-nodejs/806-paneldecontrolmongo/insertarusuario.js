const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/aplicacion"; 

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa");
    ////////
    const entradas = mongoose.model("usuarioslogin", new mongoose.Schema({
      usuario: String,
      password: String,
        nombrecompleto:String
    }));

    const documento = new entradas({ 
        usuario: "jocarsa", 
        password: "jocarsa" ,
        nombrecompleto:"Carratala Sanchis"
    });

    documento.save()
      .finally(() => mongoose.connection.close());
    ////////
    
  })
  .catch((err) => console.error("Error de conexión:", err));