import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AirPollution } from '../models/OpenWeather.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsoApiOpenWeatherService {

  public listData : AirPollution[] = []
  public content = new BehaviorSubject<any>(this.listData);
  public share = this.content.asObservable();

  constructor(
    private client : HttpClient
  ) { }

  getCoordonne(lon:number, lat:number){
    this.client.get<AirPollution>(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=06a8666818c9a1c38413f8fe35159295`) //http://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=1606488670&end=1606747870&appid=06a8666818c9a1c38413f8fe35159295
      .pipe(tap(data => {
        this.listData.push(data)
      }))
      .subscribe();
      this.content.next(this.listData)
      console.log(this.listData)
  }

}
