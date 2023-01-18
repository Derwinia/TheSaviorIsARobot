import { Component, OnInit, ViewChild } from '@angular/core';
import { WorldAPI } from 'src/app/models/WorldAPI.model';
import { UIChart } from 'primeng/chart';
import { ConsoWorldAPI } from 'src/app/services/consoWorldAPI.service';

@Component({
  selector: 'app-world-state-api',
  templateUrl: './world-state-api.component.html',
  styleUrls: ['./world-state-api.component.scss']
})
export class WorldStateApiComponent implements OnInit {

  @ViewChild("chart") chart? : UIChart

  stackedData: any;
  stackedOptions: any;

  constructor(private service: ConsoWorldAPI) {}

  ngOnInit() {
    this.service.share.subscribe(x => this.fillBasicData(x))
    this.service.getOne(2)
  }

  private fillBasicData(dataApi : WorldAPI){
    if(dataApi == undefined) return;
    this.stackedData= {labels: [dataApi.name],
      datasets: [{
          type: 'bar',
          label: 'Air pure',
          backgroundColor: '#42A5F5',
          data: [dataApi.size-dataApi.co2]
        }, {
          type: 'bar',
          label: 'CO2',
          backgroundColor: '#66BB6A',
          data: [dataApi.co2]
      },]
    };

    this.stackedOptions = {
      tooltips: {
          mode: 'index',
          intersect: false
      },
      borderRadius: Number.MAX_VALUE,
      indexAxis: 'y',
      responsive: true,
      scales: {
        x: {
          stacked: true,
          max: dataApi.size
        },
        y: {
          stacked: true,
        }
      }
    };
  }
}
