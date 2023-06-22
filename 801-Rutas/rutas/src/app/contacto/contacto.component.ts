import { Component } from '@angular/core';

interface CampoFormulario{
    nombre:string;
    tipo:string,
    marcador:string
    
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
    listaCampos = [{
        nombre:"Nombre",
        tipo:"text",
        marcador:"Introduce tu nombre"
    },
    {
        nombre:"Email",
        tipo:"email",
        marcador:"Introduce tu email"
    },
    {
        nombre:"Mensaje",
        tipo:"text",
        marcador:"Introduce tu mensaje"
    }
    ,
    {
        nombre:"Enviar",
        tipo:"submit",
        marcador:""
    }]
}
