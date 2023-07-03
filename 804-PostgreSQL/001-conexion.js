const { Client } = require('pg');

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

    // SELECT query
    const query = 'SELECT * FROM clientes';

    // Execute the query
    return client.query(query);
  })
  .then((result) => {
    // Print the retrieved data
    console.log(result.rows);
  })
  .catch((error) => {
    console.error('Error executing query', error);
  })
  .finally(() => {
    // Disconnect from the PostgreSQL database
    client.end()
      .then(() => {
        console.log('Disconnected from the database');
      })
      .catch((error) => {
        console.error('Error disconnecting from the database', error);
      });
  });