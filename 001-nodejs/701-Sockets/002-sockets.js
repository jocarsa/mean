const express = require("express");
const app = express();

const servidor = require("http")
const io = require("socket.io").servidor



servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hola mundo desde Node')
}).listen(8080)