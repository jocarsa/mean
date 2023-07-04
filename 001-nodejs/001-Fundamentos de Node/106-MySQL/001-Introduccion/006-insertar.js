// npm install mysql
var mysql = require("mysql")

var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejs",
    password:"nodejs",
    database:"blog"
})

conexion.connect(function(err){
    if(err){
        //throw err
        console.log("Ha ocurrido algun tipo de error")
    }
    console.log("¡Me he conectado!")
    
    conexion.query("INSERT INTO entradas VALUES(NULL,'Primera entrada','Contenido de la entrada','Jose Vicente')",function(err,result){
        if(err){
            throw err;
        }
        console.log("base de datos creada");
    })
})