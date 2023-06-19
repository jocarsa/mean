var servidor = require('http');

var mensajes = [
    'mensaje 1',
    'mensaje 2'
];

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    
    if(req.url == "/"){
        res.write("Chat")
        res.write(JSON.stringify(mensajes))
    }else if(req.url == "/envio"){
        res.write("Voy a enviar un mensaje")
    }
    
    
    res.end('')
    
}).listen(80)