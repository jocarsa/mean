const express = require("express");
const app = express();

const servidor = require("http").createServer(app)
const io = require("socket.io").servidor

servidor.listen(3000,()=>{
    console.log("Escuchando en el puerto 3000")
})