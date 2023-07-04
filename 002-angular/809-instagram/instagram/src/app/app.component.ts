import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

interface Proyecto{
    titulo:string;
    contenido:string;
    imagen:string
  
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
isCustomClassActive = false;
  titulo = 'instagram';
  data!: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }
  handleClick(){
  console.log("Has hecho click")
  this.isCustomClassActive = !this.isCustomClassActive;
  }
}
