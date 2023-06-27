const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql');
const url = require('url')
app.use(cors())

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost', 
  user: 'nodejs', 
  password: 'nodejs', 
  database: 'blog' 
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
    
    const query = `
        INSERT INTO entradas
        VALUES(
        NULL,
        '`+parametros.titulo+`',
        '`+parametros.contenido+`',
        '`+parametros.autor+`'
        )`; 

  queryDatabase(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch agenda data' });
    } else {
      res.end("ok");
    }
  });
})

app.get("/miapi/read",(req,res)=>{
    const query = "SELECT * FROM entradas"; 

  queryDatabase(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch agenda data' });
    } else {
      res.json(results);
    }
  });
})

app.get("/miapi/update",(req,res)=>{
    const query = "UPDATE entradas SET titulo = 'que tal' WHERE Identificador = 5"; 

  queryDatabase(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch agenda data' });
    } else {
      res.end("ok");
    }
  });
})

app.get("/miapi/delete",(req,res)=>{
    const query = "DELETE  FROM entradas  WHERE Identificador = 5"; 

  queryDatabase(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch agenda data' });
    } else {
      res.end("ok");
    }
  });
})




app.listen(808,()=>{
    console.log("Servidor a la escucha")
})