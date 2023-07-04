const http = require("http")
const mongoose = require("mongoose")

const mongoUrl = "mongodb://127.0.0.1:27017/blog"
// Especifico cómo quiero recibir los datos
const postSchema = new mongoose.Schema({
    titulo:String,
    contenido:String
})

const Post = mongoose.model("Post",postSchema)

// Me conecto a la base de datos
mongoose.connect(mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("Conectado con Mongo")
        // En el caso de que dé correcta, arranco el servidor
        arrancarServidor()
    })
    .catch((err) =>{
        console.log("Ha ocurrido algún error")
    })
// Esta función se encarga de arrancar el servidor solo cuando MongoDB dé el OK
function arrancarServidor(){
    console.log("vamos a arrancar el servidor")
    const servidor = http.createServer((req,res) =>{
        if(req.url == "/posts"){
            res.setHeader('Content-type','application/json')
            res.write("estas en la página principal")
            Post.find({})
            .exec()
            .then((posts)=>{
                res.write("entrada")
                res.write(JSON.stringify(posts))
            })
            .catch((err)=>{
                console.error("error: ",err)
            })
        }else{
            res.write("404 no encontrado")
        }
        res.end("")
    });
    const puerto = 10800;
    servidor.listen(puerto,()=>{
        console.log("El servidor está escuchando en el puerto 10800")
        
    })
}









