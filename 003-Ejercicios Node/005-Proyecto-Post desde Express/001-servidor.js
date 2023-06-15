// Importing express module
const express = require('express');
var bodyParser = require('body-parser')
const app = express();
app.use( bodyParser.json() );       // to support JSON-encoded bodies

 
app.use(express.json());
 
app.get('/', (req, res) => {
  res.send(`
                <form action="/" method="POST">
                    <input type="number" name="edad">
                    <input type="submit">
                </form>
            `)
});
 
app.post('/', (req, res) => {

  var edad = req.body.edad;
    console.log(req)
  res.send('El doble de tu edad es de: '+(edad*2));
  
});
 
app.listen(3000, () => {
  console.log('Our express server is up on port 3000');
});