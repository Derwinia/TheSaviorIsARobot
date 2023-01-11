import { Component, OnInit, ViewChild } from '@angular/core';
import { concat } from 'rxjs';
import { AirPollution, FormatForChart } from 'src/app/models/OpenWeather.model';
import { UIChart } from 'primeng/chart';
import { ConsoApiOpenWeatherService } from 'src/app/services/consoApiOpenWeather.service';

@Component({
  selector: 'app-graphique-api',
  templateUrl: './graphique-api.component.html',
  styleUrls: ['./graphique-api.component.scss']
})

export class GraphiqueApiComponent implements OnInit {

  @ViewChild("chart") chart? : UIChart

  basicData: any;
  horizontalOptions: any;
  newEntry?: FormatForChart;

  constructor(private service: ConsoApiOpenWeatherService) { }

  ngOnInit(): void {
    console.log(this.chart);

    this.service.content.subscribe(x => this.fillBasicData(x))

    this.basicData = {
      labels: ['co','no','no2','o3','so2','pm2_5','pm10','nh3'],
      datasets: []
    };
    this.horizontalOptions = {
      indexAxis: 'y',
      plugins: {
        legend: {
          position : "right",
          align : "start",
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

  private fillBasicData(dataApi : AirPollution){

    if(dataApi == undefined) return;
    let dataArray : any[] = []
    dataApi.list.forEach((detail : any) => {
      Object.entries(detail.components).forEach(([key, value])=> dataArray.push(value))
    });
    this.newEntry = {
      label : `entry_#${this.basicData.datasets.length+1}`,
      backgroundColor : this.randomColor(),
      data : dataArray
    }
    this.basicData.datasets.push(this.newEntry);
    this.chart?.refresh();
  }

  private randomColor() : string{
    var randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    console.log(randomColor)
    return randomColor.toString()
  }
}
