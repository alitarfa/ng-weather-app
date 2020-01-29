import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  private subjectBeh = new Subject<{}>();
  clickeSub = new Subject<boolean>();

  constructor(private api: HttpClient) {
  }

  fetchFiveDaysForcast (payload){

   this.api.get(this.urlBuilder(payload))
   .subscribe(res => {
     this.subjectBeh.next(res);
   });
  }

  urlBuilder = (payload) => {
    return "https://api.openweathermap.org/data/2.5/forecast?q="+payload+"&appid=0ada432b59deb9716c357092c5f79be6";
  }


  getDataWeather() {
    return this.subjectBeh.asObservable();
  }

  getStateClick() {
    return this.clickeSub.asObservable();
  }

}
