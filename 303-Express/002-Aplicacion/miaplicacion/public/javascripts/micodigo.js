$(document).ready(function(){
    $("#palabra").keyup(function(){
        console.log("has escrito: "+$(this).val())
    })
})