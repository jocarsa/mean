var servidor = require('http');

var edad = 45;

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    //edad++;
    if(req.url == "/"){
        res.write("Estás en la página principal")
    }else if(req.url == "/sobremi"){
         res.write("Estás en la página sobre mi")    
    }else if(req.url == "/contacto"){
        res.write("Estás en la página de contacto")
    }
    
    res.end('')
    
}).listen(80)