import { Component, OnInit } from '@angular/core';
import { ActionHandlerService } from '../services/action-handler.service';
import { ModelHandlerService } from '../services/model-handler.service';
import { WeatherAPIService } from '../services/weather-api.service';

@Component({
  selector: 'app-weather-cities',
  templateUrl: './weather-cities.component.html',
  styleUrls: ['./weather-cities.component.scss']
})
export class WeatherCitiesComponent implements OnInit {

  listCities = new Array();

  constructor(private actionHandler: ActionHandlerService, private modelHandler: ModelHandlerService,private api : WeatherAPIService) { 
  }

  ngOnInit() {
    this.listCities = this.modelHandler.getListCities();
  }

  openModel = () => {
    this.actionHandler.openModel();
  }

  /**
   * Selecte on City form the list of cities and fetch data fron remote service 
   */
  selectCity = (name: string) => {
    console.log('ACTION::ON_CARD::CLICK::'+name);
    this.api.fetchFiveDaysForcast(name);
    this.api.clickeSub.next(true);
  };

  

}
