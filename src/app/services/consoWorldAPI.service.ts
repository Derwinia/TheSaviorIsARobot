import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorldAPI } from '../models/WorldAPI.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConsoWorldAPI {

  public data? : WorldAPI
  private content = new BehaviorSubject<any>(this.data);
  public share = this.content.asObservable();

  constructor(
    private client : HttpClient
  ) { }

  getOne(id : number){
    this.client.get<WorldAPI>('https://localhost:7165/api/World/'+id)
    .subscribe(data => {
        this.data = data
        this.content.next(this.data)
      })
  }
}
