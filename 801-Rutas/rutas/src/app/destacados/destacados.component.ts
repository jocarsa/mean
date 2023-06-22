import { Component } from '@angular/core';

interface Destacado{
    titulo:string;
    contenido:string;
    imagen:string
}

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent {
listaDestacados = [{
        titulo:"Primer destacado",
        contenido:"Este es el contenido",
        imagen:"discurso.jpg"
    },
    {
        titulo:"Segundo destacado",
        contenido:"Este es el contenido",
        imagen:"guitarra.jpg"
    },
    {
        titulo:"Tercer destacado",
        contenido:"Este es el contenido",
        imagen:"inteligenciaartificial.jpg"
    }]
}
