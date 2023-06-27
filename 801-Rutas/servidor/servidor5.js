const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql');
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


app.get("/miapi/dameBlog",(req,res)=>{
    const query = "SELECT * FROM entradas"; 

  queryDatabase(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch agenda data' });
    } else {
      res.json(results);
    }
  });
})

app.get("/miapi/dameSobremi",(req,res)=>{
    const query = "SELECT titulo,contenido FROM sobremi"; 

  queryDatabase(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch agenda data' });
    } else {
      res.json(results);
    }
  });
})

app.get("/miapi/dameProyectos",(req,res)=>{
    const query = "SELECT titulo,contenido FROM proyectos"; 

  queryDatabase(query, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Failed to fetch agenda data' });
    } else {
      res.json(results);
    }
  });
})


app.listen(808,()=>{
    console.log("Servidor a la escucha")
})