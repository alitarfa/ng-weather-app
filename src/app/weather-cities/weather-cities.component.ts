import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-cities',
  templateUrl: './weather-cities.component.html',
  styleUrls: ['./weather-cities.component.scss']
})
export class WeatherCitiesComponent implements OnInit {

  listCities = new Array();

  constructor() { 
    
    this.listCities.push(
      {id : 1,name : 'Algeria'},
      {id : 1,name : 'Algeria'},
      );
  }

  ngOnInit() {
  }



}
