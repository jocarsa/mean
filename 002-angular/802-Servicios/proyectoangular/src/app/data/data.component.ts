import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  template: `
    <h1>Dame mis datos</h1>
    <ul>
      <li *ngFor="let item of data">
        <h3>{{ item.nombre }} {{ item.apellidos }}</h3>
        <p>{{ item.email }}</p>
        <p>{{ item.telefono }}</p>
    </li>
    </ul>
  `,
})
export class DataComponent implements OnInit {
  data!: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }
}