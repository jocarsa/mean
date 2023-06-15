var servidor = require('http');

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    
    switch(req.url){
        case "/":
            res.write(`
                <form action="formulario" method="POST">
                    <input type="number" name="edad">
                    <input type="submit">
                </form>
            `);
            break;
        case "/formulario":
            res.write("estas en la pagina del formulario");
            break;
        
        default:
            res.write("404 no encontrado");
    }
    res.end("")
}).listen(8080)