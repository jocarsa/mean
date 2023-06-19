var servidor = require('http');

var edad = 45;

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    
    if(req.url == "/"){
        res.write("Chat")    
    }else if(req.url == "/envio"){
        res.write("Voy a enviar un mensaje")
    }
    
    
    res.end('')
    
}).listen(80)