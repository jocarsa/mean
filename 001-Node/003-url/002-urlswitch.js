var servidor = require('http');

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
    res.end("")
}).listen(8080)