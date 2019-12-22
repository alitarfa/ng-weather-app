import { Injectable } from '@angular/core';
import { City } from '../model/city';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelHandlerService {

  private listCitiesSubject = new BehaviorSubject([]);
  private listCities = new Array();

  // can i make a list as as observable (if any changes will automaticly send a notification to other depends)

  constructor() {

  }

  addCity = (city : string)=> {
    console.log('ACTION::ADDING_TO_LIST_CITIES');
    this.listCities.push({name: city});
  }

  deleteCity = ()=> {
  }

  getListCities = ()=> {
    return this.listCities;
  }
}
