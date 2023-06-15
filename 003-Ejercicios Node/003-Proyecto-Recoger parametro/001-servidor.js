var servidor = require('http');
var querystring = require('querystring');

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
            res.write("Estas en la pagina del formulario hola");
            //if (req.method == 'POST') {
            console.log(req)
            let edad = req;
            console.log('Received edad:', edad);
              //} 
            break;
        default:
            res.write("404 no encontrado");
    }
    res.end("")
}).listen(8080)