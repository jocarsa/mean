import { Component, OnInit } from '@angular/core';

import { DatasobremiService } from '../datasobremi.service';

@Component({
  selector: 'app-sobremi',
  template: `
  
      <h3>Sobre Mi</h3>
        <div class="entrada" *ngFor="let item of data">
            <img src="/assets/imagenes/nada.jpg">
            <h4>{{ item.titulo }}</h4>
            <p class="autor">{{item.autor}}</p>
            <p>{{ item.contenido }}</p>
            <div class="clearfix"></div>
        </div>
        
    
  `,
})
export class SobremiComponent implements OnInit{
    data!: any[];
      constructor(private datasobremiService: DatasobremiService) { }

      ngOnInit() {
        this.datasobremiService.getData().subscribe(response => {
          this.data = response;
        });
      }
}
