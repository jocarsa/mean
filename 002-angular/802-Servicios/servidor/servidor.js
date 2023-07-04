const express = require('express')
const app = express()

app.get("/",(req,res)=>{
    res.end("hola")
})

app.listen(808,()=>{
    console.log("Servidor a la escucha")
})