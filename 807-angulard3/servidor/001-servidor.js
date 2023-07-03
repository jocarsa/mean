const sqlite3 = require('sqlite3').verbose();

// Connect to the SQLite database
const db = new sqlite3.Database('lenguajes.sqlite3');

// Perform a SELECT query
db.all('SELECT * FROM lenguajes', (error, rows) => {
  if (error) {
    console.error(error.message);
    return;
  }

  // Display the retrieved data
  rows.forEach(row => {
    console.log(row);
  });

  // Close the database connection
  db.close();
});