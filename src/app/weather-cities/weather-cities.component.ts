import { Component, OnInit } from '@angular/core';
import { ActionHandlerService } from '../services/action-handler.service';

@Component({
  selector: 'app-weather-cities',
  templateUrl: './weather-cities.component.html',
  styleUrls: ['./weather-cities.component.scss']
})
export class WeatherCitiesComponent implements OnInit {

  listCities = new Array();

  constructor(private actionHandler: ActionHandlerService) { 

    this.listCities.push(
      {id : 1,name : 'Algeria'},
      {id : 1,name : 'Algeria'},
      );
  }

  ngOnInit() {
  }

  openModel = () => {
    this.actionHandler.openModel();
  }



}
