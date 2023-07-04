var servidor = require('http');
var url = require('url')

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    
    var parametros = url.parse(req.url,true).query;
    var nombre = parametros.nombre
    var apellido = parametros.apellido
    res.write(nombre+" - "+apellido)
    res.end("")
}).listen(8080)