const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3000;

// Connect to the SQLite database
const db = new sqlite3.Database('lenguajes.sqlite3');
app.use(cors());
// Define a route to retrieve data
app.get('/data', (req, res) => {
  // Perform a SELECT query
  db.all('SELECT valor FROM lenguajes', (error, rows) => {
    if (error) {
      console.error(error.message);
      return res.status(500).send('Internal Server Error');
    }

    // Extract the column values as an array
    const values = rows.map(row => row.valor);

    // Send the array of values as the response
    res.json(values);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});