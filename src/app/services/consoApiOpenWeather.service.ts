import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AirPollution } from '../models/OpenWeather.model';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsoApiOpenWeatherService {

  public listData? : AirPollution
  private content = new BehaviorSubject<any>(this.listData);
  public share = this.content.asObservable();

  constructor(
    private client : HttpClient
  ) { }

  getCoordonne(lon:number, lat:number){
    this.client.get<AirPollution>(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=`+environment.tokenOpenWeather)
    .subscribe(data => {
        this.listData = data
        this.content.next(this.listData)
      })
  }
}
