import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-city',
  templateUrl: './card-city.component.html',
  styleUrls: ['./card-city.component.scss']
})
export class CardCityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedCity = ()=> {
    console.log('SELECTED_CITY::ACTION::CLICK');
    // call  the remote API 

    // the second section will be notifed because is already subscribed to the stream  


  }
}
