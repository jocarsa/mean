const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Connect to the SQLite database
const db = new sqlite3.Database('lenguajes.sqlite3');

// Define a route to retrieve data
app.get('/data', (req, res) => {
  // Perform a SELECT query
  db.all('SELECT * FROM lenguajes', (error, rows) => {
    if (error) {
      console.error(error.message);
      return res.status(500).send('Internal Server Error');
    }

    // Send the retrieved data as the response
    res.json(rows);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});