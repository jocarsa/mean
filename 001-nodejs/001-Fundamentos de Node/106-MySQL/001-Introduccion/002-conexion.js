// npm install mysql
var mysql = require("mysql")

var conexion = mysql.createConnection({
    host:"localhost",
    user:"nodejs",
    password:"nodejs"
})

conexion.connect(function(err){
    if(err){
        //throw err
        console.log("Ha ocurrido algun tipo de error")
    }
    console.log("¡Me he conectado!")
})