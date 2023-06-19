var servidor = require('http');
var url = require('url');

var mensajes = [
    'mensaje 1',
    'mensaje 2'
];

servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var urlparseada = url.parse(req.url,true);
    if(req.url == "/"){
        res.write(`
            <div id="mensajes"></div>
            <input type="text" id="nuevomensaje">   
            <button id="envia">Envia</button>
            <script>
                document.getElementById("envia").onclick = function(){
                    console.log("envia")
                    fetch("http://localhost:8080/envio?mimensaje="+encodeURI(document.getElementById("nuevomensaje").value))
                }
                var temporizador = setTimeout("bucle()",1000)
                function bucle(){
                    console.log("hola soy tu temporizador")
                    clearTimeout(temporizador)
                    temporizador = setTimeout("bucle()",1000)
                    }
            </script>
        `);
        console.log(mensajes)
        //res.write(JSON.stringify(mensajes));
    }else if(urlparseada.pathname.startsWith('/envio')){
        var parametros = url.parse(req.url,true).query;
        console.log(parametros);
        mensajes.push(parametros.mimensaje);
        res.write("Voy a enviar un mensaje");
    }else{
        res.write("404 no encontrado");
    }
    
    
    res.end('')
    
}).listen(8080)