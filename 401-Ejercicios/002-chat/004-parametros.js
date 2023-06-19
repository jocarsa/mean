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
        mensajes.push("hola")
        res.write("Voy a enviar un mensaje")
    }else{
        res.write("404 no encontrado")
    }
    
    
    res.end('')
    
}).listen(80)