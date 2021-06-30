import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getChart();
  }

  getChart() {
    var myChart = new Chart("barChart", {
      type: 'bar',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
              label: 'Apointments',
              data: [12, 19, 3, 5, 45, 7, 23, 4, 22, 12, 35, 17],
              backgroundColor: [
                'rgb(32, 203, 133)',
                  'rgb(90, 94, 237)',
                  'rgb(0, 207, 222)',
                  'rgb(255, 128, 128)',
                  'rgb(32, 203, 133)',
                  'rgb(90, 94, 237)',
                  'rgb(0, 207, 222)',
                  'rgb(255, 128, 128)',
                  'rgb(32, 203, 133)',
                  'rgb(90, 94, 237)',
                  'rgb(0, 207, 222)',
                  'rgb(255, 128, 128)'
              ],
              borderColor: [
                  'rgb(32, 203, 133)',
                  'rgb(90, 94, 237)',
                  'rgb(0, 207, 222)',
                  'rgb(255, 128, 128)',
                  'rgb(32, 203, 133)',
                  'rgb(90, 94, 237)',
                  'rgb(0, 207, 222)',
                  'rgb(255, 128, 128)',
                  'rgb(32, 203, 133)',
                  'rgb(90, 94, 237)',
                  'rgb(0, 207, 222)',
                  'rgb(255, 128, 128)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          legend: {
              position: 'right',
              labels: {
                usePointStyle: true,
                boxWidth: 6
              }
          }
      }
  });
  }
}
