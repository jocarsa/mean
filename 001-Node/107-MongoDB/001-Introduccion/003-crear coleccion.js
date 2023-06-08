// npm install mongodb
var mongodb = require("mongodb").MongoClient;
var direccion = "mongodb://localhost:27017/"

mongodb.connect(direccion,function(err,db){
    if(err){
        throw err;
    }
    console.log("base de datos creada")
    // Quiero usar la base de datos blognodejs
    var mibase = db.db("blognodejs")
    mibase.createCollection("entradas",function(err,res){
        if(err){
            throw err;
        }
        mibase.close()
        console.log("ok")
    })
})