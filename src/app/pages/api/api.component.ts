import { AfterViewInit, Component, OnInit } from '@angular/core';

import { ConsoApiOpenWeatherService } from 'src/app/services/consoApiOpenWeather.service';

import { currentAirPollution } from 'src/app/models/OpenWeather.model';
import * as L from 'leaflet';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit,AfterViewInit {

  OpenWeatherData : any ;
  map : any;
  lat :number = 0;
  long : number = 0;

  constructor(private service: ConsoApiOpenWeatherService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([50.46247432673007, 4.857132911583904], 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.map.on("click",(e : any) => this.getCoord(e.latlng.lat,e.latlng.lng))
  }

  getCoord(lat : number, long : number){
    this.lat = lat;
    this.long = long;
  }

  getAPIInfos(lat : number, long : number){
    this.service
  .getCoordonne(lat, long)
  .subscribe({
    next: (response: any) => {
    this.OpenWeatherData = response;
    console.log(this.OpenWeatherData)
  }, error: () => console.log});
}

}
