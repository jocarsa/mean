var servidor = require('http');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`
              <!doctype html>
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                    
              `)
    for(let dia = 1;dia<31;dia++){
        res.write("Hoy es el día "+dia+" del mes<br>"); 
    }
    res.end("")
}).listen(8080)


