const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.get("/miapi/dameagenda",(req,res)=>{
    res.json([
        {nombre:"Jose Vicente",edad:45},
        {nombre:"Juan",edad:44},
        {nombre:"Julio",edad:46},
        {nombre:"Julian",edad:42}
    ])
})

app.get("/miapi/damecosas",(req,res)=>{
    res.json([
        {nombre:"Jose Vicente",edad:45},
        {nombre:"Juan",edad:44},
        {nombre:"Julio",edad:46},
        {nombre:"Julian",edad:42}
    ])
})

app.listen(808,()=>{
    console.log("Servidor a la escucha")
})