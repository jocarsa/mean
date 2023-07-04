import { Component, OnInit } from '@angular/core';
import { DataproyectosService } from '../dataproyectos.service';


@Component({
  selector: 'app-proyectos',
  template: `
  
      <h3>Proyectos</h3>
        <div class="entrada" *ngFor="let item of data">
            <img src="/assets/imagenes/nada.jpg">
            <h4>{{ item.titulo }}</h4>
            <p class="autor">{{item.autor}}</p>
            <p>{{ item.contenido }}</p>
            <div class="clearfix"></div>
        </div>
        
    
  `,
})
export class ProyectosComponent implements OnInit {
data!: any[];
      constructor(private dataproyectosService: DataproyectosService) { }

      ngOnInit() {
        this.dataproyectosService.getData().subscribe(response => {
          this.data = response;
        });
      }
}
