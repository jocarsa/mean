var servidor = require('http');

var edad = 45;

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
            <h1>Web personal</h1>
    `)
    if(req.url == "/"){
        res.write("Estás en la página principal")
    }else if(req.url == "/sobremi"){
         res.write("Estás en la página sobre mi")    
    }else if(req.url == "/contacto"){
        res.write("Estás en la página de contacto")
    }else{
        res.write("404 no encontrado")
    }
    res.write(`
        </body>
        </html>
    `)
    
    res.end('')
    
}).listen(80)