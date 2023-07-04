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
    conexion.query("CREATE TABLE IF NOT EXISTS `blog`.`entradas` (`Identificador` INT(255) NOT NULL AUTO_INCREMENT , `titulo` VARCHAR(255) NOT NULL , `contenido` TEXT NOT NULL , `autor` VARCHAR(255) NOT NULL , PRIMARY KEY (`Identificador`)) ENGINE = InnoDB;",function(err,result){
        if(err){
            throw err;
        }
        console.log("base de datos creada");
    })
})