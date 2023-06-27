import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  template: `
    <h1>Dame mis datos</h1>
    <ul>
      <li *ngFor="let item of data">
        <h3>{{ item.titulo }}</h3>
        <p>{{ item.contenido }}</p>
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