const express = require('express')
const aplicacion = express()
const puerto = 80

aplicacion.get('/', (req, res) => {
  res.send('Hola mundo desde Express y esta es la pagina oficial!')
})

aplicacion.get('/sobremi', (req, res) => {
  res.send('Esta es la web de sobre mi!')
})

aplicacion.get('/contacto', (req, res) => {
  res.send('En esta página te podrás poner en contacto conmigo!')
})

aplicacion.listen(puerto, () => {
  console.log(`Arrancado en el puerto ${puerto}`)
})