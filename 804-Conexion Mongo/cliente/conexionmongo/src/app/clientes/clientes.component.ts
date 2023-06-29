import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blog',
  template: `
  
      <h3>Clientes</h3>
        <div class="entrada" *ngFor="let item of data">
            <img src="/assets/imagenes/nada.jpg">
            <h4>{{ item.nombre }} {{ item.apellidos }}</h4>
            
            
            <div class="clearfix"></div>
        </div>
        
    
  `,
})
export class ClientesComponent {
data!: any[];
      constructor(private dataService: DataService) { }

      ngOnInit() {
        this.dataService.getData().subscribe(response => {
          this.data = response;
        });
      }
}
