const mongoose = require("mongoose");
var servidor = require('http');
var url = require('url')
var entradas = []

    // Me conecto a mongodb
    const direccion = "mongodb://127.0.0.1:27017/traductor"; 
    mongoose.connect(direccion, { useNewUrlParser: true, useUnifiedTopology: true })
          .then(() => {
            const PalabrasSchema = new mongoose.Schema({
              titulo: String,
              contenido: String,
            });
            const Palabras = mongoose.model("palabras", PalabrasSchema);
            Palabras.find({es:"pierna"})
              .then((entries) => {
                console.log("He encontrado lo siguiente en Mongo:");
                console.log(entries);
                entradas = entries
                console.log("ahora que he recibido información, te la doy")
                servidor.createServer(function(req,res){
                    res.writeHead(200,{'Content-Type':'text/html'});
                    var parametros = url.parse(req.url,true).query;
                    var palabra = parametros.palabra

                    res.write("voy a sacar algo por pantalla")
                    console.log("voy a sacar una entrada")
                    res.write("veamoslo")
                    console.log("Te doy lo que quieres:")
                    console.log(entradas[0])
                    const { es } = entradas[0];
                    console.log(es)
                    //res.write("El doble de tu edad es: "+(edad*2))
                    res.end("")
                }).listen(8080)
                
              })
              .catch((err) => {
                console.error("Algo ha fallado:", err);
              })
              .finally(() => mongoose.connection.close());
          })
          .catch((err) => console.error("Error de conexión:", err));
    


