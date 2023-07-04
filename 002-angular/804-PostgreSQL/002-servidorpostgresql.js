const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;
const cors = require('cors');

// Configure the PostgreSQL connection
const client = new Client({
  user: 'josevicente',
  password: 'josevicente',
  host: 'localhost',
  database: 'aplicacion',
  port: '5432', // default is 5432
});

// Connect to the PostgreSQL database
client.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

app.use(cors());

// Define the route
app.get('/data', (req, res) => {
  // SELECT query
  const query = 'SELECT * FROM clientes';

  // Execute the query
  client.query(query)
    .then((result) => {
      // Send the retrieved data as the response
      res.json(result.rows);
    })
    .catch((error) => {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});