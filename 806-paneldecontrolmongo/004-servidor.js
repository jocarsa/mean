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
    
    const UsuarioSchema = new mongoose.Schema({
        usuario: String,
        password: String
    });

    const Clientes = mongoose.model("clientes", ClienteSchema);
    
    const Usuario = mongoose.model("usuarioslogin", UsuarioSchema);
    
    app.get("/", (req, res) => {
        res.end(`
<!doctype html>
<html>
    <head>
        <style> 
            body,html{padding:0px;margin:0px;font:family:sans-serif;background:rgb(220,220,220);}
            #login{width:200px;height:200px;padding:20px;background:white;border-radius:5px;box-shadow:0px 10px 20px rgba(0,0,0,0.3);text-align:center;margin:auto;margin-top:200px;}
            #login *{width:100%;margin-top:10px;margin-bottom:10px;padding-top:10px;padding-bottom:10px;}
        </style>
    </head>
    <body>  
            <div id="login">
            <input type="text" id="usuario">
            <input type="text" id="password">
            <button id="envia">Envia</button>
</div>
            <script>
                document.getElementById("envia").onclick = function(){
                    console.log("funcionando")
                            usuario = document.getElementById("usuario").value
                    password = document.getElementById("password").value
                    fetch("/login?usuario="+usuario+"&password="+password)
                    .then(response => response.json())
                    .then(json => resultadoLogin(json))
                                    }
                    function resultadoLogin(json){
                    console.log(json)
                    if(json[0] == "ok"){
                    window.location = "/panel"
                    }
                    }
            </script>
    </body>
</html>
        `);
    });
    
    app.get("/panel", (req, res) => {
        res.end(`
<!doctype html>
<html>
    <head>
        <style> 
            body,html{padding:0px;margin:0px;font:family:sans-serif;background:rgb(220,220,220);}
            #login{width:200px;height:200px;padding:20px;background:white;border-radius:5px;box-shadow:0px 10px 20px rgba(0,0,0,0.3);text-align:center;margin:auto;margin-top:200px;}
            #login *{width:100%;margin-top:10px;margin-bottom:10px;padding-top:10px;padding-bottom:10px;}
        </style>
    </head>
    <body>  
            Panel de control
    </body>
</html>
        `);
    });

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
    
    app.get("/login", (req, res) => {
         var parametros = urlnode.parse(req.url,true).query;
        console.log("estoy aqui")
        Usuario.find()
        .then((entries) => {
            var pasas = false;
          console.log("He encontrado lo siguiente en Mongo:");
            
            for(var i = 0;i<entries.length;i++){
                console.log("entrada usuario: "+entries[i].usuario)
                console.log("url usuario: "+parametros.usuario)
                console.log("entrada password: "+entries[i].password)
                console.log("url password: "+parametros.password)
               if(
                   entries[i].usuario == parametros.usuario
                   &&
                   entries[i].password == parametros.password
               ){
                   pasas = true
               }
                
                   
            }
            if(pasas == true){
                console.log(entries);
                res.json(["ok"]);
            }else{
                console.log(entries);
                res.json(["ko"]);
            }
          
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