const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/blog"; 

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa");
    
    
  })
  .catch((err) => console.error("Error de conexión:", err));