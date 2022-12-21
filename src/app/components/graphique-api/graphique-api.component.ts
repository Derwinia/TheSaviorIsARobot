import { Component, OnInit } from '@angular/core';

import { ConsoApiOpenWeatherService } from 'src/app/services/consoApiOpenWeather.service';

@Component({
  selector: 'app-graphique-api',
  templateUrl: './graphique-api.component.html',
  styleUrls: ['./graphique-api.component.scss']
})
export class GraphiqueApiComponent implements OnInit {

  basicData: any;
  basicDataBrut: any;
  horizontalOptions: any;

  constructor(private service: ConsoApiOpenWeatherService) { }

  ngOnInit(): void {
    this.basicDataBrut = this.service.content.subscribe()
    this.basicData = {
      labels: ['co','no','no2','o3','so2','pm2_5','pm10','nh3'],
      datasets: [
          {
              label: 'neant',
              backgroundColor: '#42A5F5',
              data: [0, 0, 0, 0, 0, 0, 0, 0]
          },
      ]
    };
    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
    };
  }

}
