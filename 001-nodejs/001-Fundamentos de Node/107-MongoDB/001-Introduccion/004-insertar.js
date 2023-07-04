// npm install mongodb
var mongodb = require("mongodb").MongoClient;
var direccion = "mongodb://localhost:27017/"

mongodb.connect(direccion,function(err,db){
    if(err){
        throw err;
    }
    console.log("base de datos creada")
    var documento = {titulo:"titulo",contenido:"contenido",autor:"Jose Vicente"}
    
    // Quiero usar la base de datos blognodejs
    var mibase = db.db("blognodejs")
    mibase.collection("entradas").insertOne(documento,
        function(err,res){
            if(err){
                throw err;
            }
            console.log("todo ok")
            mibase.close()
        })
    
})