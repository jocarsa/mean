var servidor = require('http');
var fs = require("fs");

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    
    switch(req.url){
        case "/":
            res.write("estas en la pagina principal");
            break;
        case "/blog":
            res.write("estas en la pagina del blog");
            break;
        case "/contacto":
            res.write("estas en la pagina de contacto");
            break;
        default:
            res.write("404 no encontrado");
    }
    fs.appendFile("log.txt",req.url+"\n",function(err){
        if(err){
            console.log("hola")
        }
    })
    res.end("")
}).listen(8080)