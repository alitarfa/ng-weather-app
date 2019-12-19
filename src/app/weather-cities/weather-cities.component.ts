import { Component, OnInit } from '@angular/core';
import { ActionHandlerService } from '../services/action-handler.service';
import { ModelHandlerService } from '../services/model-handler.service';

@Component({
  selector: 'app-weather-cities',
  templateUrl: './weather-cities.component.html',
  styleUrls: ['./weather-cities.component.scss']
})
export class WeatherCitiesComponent implements OnInit {

  listCities = new Array();

  constructor(private actionHandler: ActionHandlerService, private modelHandler: ModelHandlerService) { 
  }

  ngOnInit() {
    this.listCities = this.modelHandler.getListCities();
  }

  openModel = () => {
    this.actionHandler.openModel();
  }

  selectCity = () => {
    
  };


}
