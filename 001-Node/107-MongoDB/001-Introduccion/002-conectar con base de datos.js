// npm install mongodb
var MongoClient = require("mongodb").MongoClient;
var direccion = "mongodb://127.0.0.1:27017/blog"

MongoClient.connect(direccion,function(err,db){
    if(err){
        throw err;
    }
    console.log("base de datos creada")
    db.close()
})