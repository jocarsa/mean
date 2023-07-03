import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  data!: number[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData()
      .subscribe((result: any[]) => {
        this.data = result.map(Number);
        this.createChart();
      });
  }

  createChart() {
    const svg = d3.select('svg');

    svg.selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d) => 300 - d * 5)
      .attr('width', 65)
      .attr('height', (d) => d * 5)
      .attr('fill', 'teal');
  }
}