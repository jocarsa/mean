var servidor = require('http');
var url = require('url')

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    
    var parametros = url.parse(req.url,true).query;
    var edad = parametros.edad
    res.write("El doble de tu edad es: "+(edad*2))
    res.end("")
}).listen(8080)