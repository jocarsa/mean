import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-clientes',
  template: `
    <h1>Dame mis datos</h1>
    <ul>
      <li *ngFor="let item of data">
       <h3>{{ item.nombre }} {{ item.apellidos }}</h3>
        <p>Email: {{ item.email }}</p>
        <p>Telefono: {{ item.telefono }}</p>
    </li>
    </ul>
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
