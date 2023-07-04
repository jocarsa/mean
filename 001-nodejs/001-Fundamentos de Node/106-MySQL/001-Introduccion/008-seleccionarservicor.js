// npm install mysql
var mysql = require("mysql")
var servidor = require('http');

servidor.createServer(function(req,res){
    
    var conexion = mysql.createConnection({
        host:"localhost",
        user:"nodejs",
        password:"nodejs",
        database:"blog"
    })
    miresultado = ""
    conexion.connect(function(err){
        if(err){
            //throw err
            console.log("Ha ocurrido algun tipo de error")
        }
        console.log("¡Me he conectado!")

        conexion.query("SELECT * FROM entradas",function(err,result,fields){
            console.log(result)
            if(err){
                throw err;
            }
            console.log("base de datos creada");
            miresultado = result
        })
    })
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(miresultado[0].titulo)
}).listen(8080)