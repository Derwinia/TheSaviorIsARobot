import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { ConsoApiOpenWeatherService } from 'src/app/services/consoApiOpenWeather.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit,AfterViewInit {

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

  confirmCoord(){
    this.service.getCoordonne(this.lat, this.long);
  }
}
