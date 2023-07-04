var servidor = require('http');

var edad = 45;

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    edad++;
    res.end('Hola mundo y tengo '+edad+' años')
    
}).listen(80)