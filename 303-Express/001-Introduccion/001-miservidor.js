const express = require('express')
const aplicacion = express()
const puerto = 80

aplicacion.get('/', (req, res) => {
  res.send('Hola mundo desde Express!')
})

aplicacion.listen(puerto, () => {
  console.log(`Arrancado en el puerto ${puerto}`)
})