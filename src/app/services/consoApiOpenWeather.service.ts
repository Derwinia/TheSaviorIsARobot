import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsoApiOpenWeatherService {

  constructor(
    private client : HttpClient
  ) { }

  getCoordonne(lon:number, lat:number){
    return this.client.get<any>(`http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=1606488670&end=1606747870&appid=06a8666818c9a1c38413f8fe35159295`).pipe(map(({list}) => ([list[0], list[24], list[48]])))
  }

}
