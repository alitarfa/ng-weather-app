import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from '../services/weather-api.service';

@Component({
  selector: 'app-table-forcast',
  templateUrl: './table-forcast.component.html',
  styleUrls: ['./table-forcast.component.scss']
})
export class TableForcastComponent implements OnInit {

  private listFiveDays = [];
  private listIcon = [
    '../../assets/001-drop.png',
    '../../assets/004-clouds.png',
    '../../assets/010-wind-1.png',
    '../../assets/006-sun.png'
  ]

  constructor(private api : WeatherAPIService) { }

  ngOnInit() {
    this.getFiveDayForCast();
  }

  private getFiveDayForCast() {
    this.api.getStateClick().subscribe(state => {
      if(state) {
        console.log('state '+ state);
        this.listFiveDays = [];
        this.api.getDataWeather().subscribe(res => {
          if(state) {
            this.listFiveDays = [];
            if(res['cod'] == '200') {
              for(var i = 0; i < 40 ; i=i+8) {
                this.listFiveDays.push(res.list[i]);
              }
            }
          }
         
        });
      }
     
    });
  }

}
