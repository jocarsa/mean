// npm install mongodb
var MongoClient = require("mongodb").MongoClient;
var direccion = "mongodb://localhost:27017/blognodejs"

MongoClient.connect(direccion,function(err,db){
    if(err){
        throw err;
    }
    console.log("base de datos creada")
    db.close()
})