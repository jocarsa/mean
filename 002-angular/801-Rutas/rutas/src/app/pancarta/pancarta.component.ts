import { Component } from '@angular/core';

interface Pancarta{
    titulo:string;
    contenido:string;
    imagen:string
}

@Component({
  selector: 'app-pancarta',
  templateUrl: './pancarta.component.html',
  styleUrls: ['./pancarta.component.css']
})
export class PancartaComponent {
    listaPancartas = [{
        titulo:"Mi primer post",
        contenido:"Este es el contenido",
        imagen:"humo-blender.png"
    },
    {
        titulo:"Mi segundo post",
        contenido:"Este es el contenido",
        imagen:"jquerycondreamweaver.png"
    },
    {
        titulo:"Mi tercer post",
        contenido:"Este es el contenido",
        imagen:"ModeladoyrenderarquitectónicoconBlender.png"
    },
    {
        titulo:"Mi cuarto post",
        contenido:"Este es el contenido",
        imagen:"PROGRAMARUNBLOGCONPHP.png"
    },
    {
        titulo:"Mi primer post",
        contenido:"Este es el contenido",
        imagen:"humo-blender.png"
    }]
}
