const http = require("http")
const mongoose = require("mongoose")

const mongoUrl = "mongodb://127.0.0.1:27017/blog"

const Schema = new mongoose.Schema({
    titulo:String,
    contenido:String
})

mongoose.connect(mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("Conectado con Mongo")
        arrancarServidor()
    })
    .catch((err) =>{
        console.log("Ha ocurrido algún error")
    })

function arrancarServidor(){
    console.log("vamos a arrancar el servidor")
}









