var servidor = require('http');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Hola mundo desde Node</h1>')
}).listen(8080)