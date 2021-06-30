import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getChart();
  }

  getChart() {
    var myChart = new Chart("myChart", {
      type: 'doughnut',
      data: {
          labels: ['Male', 'Female', 'Transgender', 'Other'],
          datasets: [{
              label: 'Gender',
              data: [12, 19, 3, 5],
              backgroundColor: [
                'rgb(32, 203, 133)',
                  'rgb(90, 94, 237)',
                  'rgb(0, 207, 222)',
                  'rgb(255, 128, 128)'
              ],
              borderColor: [
                  'rgb(32, 203, 133)',
                  'rgb(90, 94, 237)',
                  'rgb(0, 207, 222)',
                  'rgb(255, 128, 128)'
              ],
              borderWidth: 0.2
          }]
      },
      options: {
        cutoutPercentage: 90,
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
