const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql');
const url = require('url')
const fs = require('fs')
app.use(cors())

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost', 
  user: 'aplicacion', 
  password: 'aplicacion', 
  database: 'aplicacion' 
});

// Define a helper function to query the database
function queryDatabase(query, callback) {
  pool.getConnection((err, connection) => {
    if (err) {
      callback(err, null);
      return;
    }

    connection.query(query, (error, results) => {
      connection.release();

      if (error) {
        callback(error, null);
        return;
      }

      callback(null, results);
    });
  });
}

app.get("/miapi/prueba",(req,res)=>{
    var parametros = url.parse(req.url,true).query;
    var nombre = parametros.nombre
    var apellido = parametros.apellido
    res.write(nombre+" - "+apellido)
    res.end("")
})

app.get("/miapi/create",(req,res)=>{
    var parametros = url.parse(req.url,true).query;
    
    var tabla = parametros.tabla
    var query = "INSERT INTO "+tabla+" VALUES( NULL,"
    for (let key in parametros) {
        if(key != "Identificador" && key != "tabla"){
            query += "'"+parametros[key]+"',"
        }
    }
    
    query = query.slice(0, -1);
        
        
        query +=")";
    console.log(query)

  queryDatabase(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch agenda data' });
    } else {
      res.end("ok");
    }
  });
})

app.get("/miapi/read",(req,res)=>{
    var parametros = url.parse(req.url,true).query;
    const query = "SELECT * FROM "+parametros.tabla; 

  queryDatabase(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch agenda data' });
    } else {
      res.json(results);
    }
  });
})

app.get("/miapi/update",(req,res)=>{
    var parametros = url.parse(req.url,true).query;
    const query = `
        UPDATE entradas 
        SET titulo = '`+parametros.titulo+`' 
        WHERE 
        Identificador = `+parametros.identificador+``; 

  queryDatabase(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Fallo en los datos' });
    } else {
      res.end("ok");
    }
  });
})

app.get("/miapi/delete",(req,res)=>{
    var parametros = url.parse(req.url,true).query;
    const query = `
    DELETE  
    FROM entradas  
    WHERE Identificador = 
    `+parametros.identificador+`` 

  queryDatabase(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch agenda data' });
    } else {
      res.end("ok");
    }
  });
})

app.get("/miapi/tablas",(req,res)=>{
    var parametros = url.parse(req.url,true).query;
    const query = `
    SHOW TABLES FROM aplicacion` 

  queryDatabase(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch agenda data' });
    } else {
     res.json(results);
    }
  });
})

app.get("/",(req,res)=>{
    fs.readFile("index.html",function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data)
        return res.end()
    })
})




app.listen(809,()=>{
    console.log("Servidor a la escucha")
})