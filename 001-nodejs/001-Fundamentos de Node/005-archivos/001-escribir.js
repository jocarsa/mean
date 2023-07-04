var fs = require("fs");

fs.appendFile("agenda.txt","Jose Vicente\n",function(err){
    if(err){
        console.log("hola")
    }
})