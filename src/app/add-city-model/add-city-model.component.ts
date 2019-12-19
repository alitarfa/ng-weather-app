import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActionHandlerService } from '../services/action-handler.service';
import { ModelHandlerService } from '../services/model-handler.service';
import { WeatherAPIService } from '../services/weather-api.service';

@Component({
  selector: 'app-add-city-model',
  templateUrl: './add-city-model.component.html',
  styleUrls: ['./add-city-model.component.scss']
})
export class AddCityModelComponent implements OnInit {

  private modelState = false;
  @ViewChild('basicModal',{static: false}) myModel;

  constructor(private actionhandler: ActionHandlerService, private modelHandler: ModelHandlerService, private web: WeatherAPIService ) {
    this.actionhandler.currentModelState.subscribe(res => {
      console.log(res);
      if(res) this.openModel();
    });
  }

  ngOnInit() {
  }

  openModel = () => {
    console.log('ACTION::OPEN_MODEL::COMPONENT');
    this.myModel.show();
  }

  closeModel = () => {
    console.log('ACTION::CLOSE_MODEL::COMPONENT');
  }

  addCity = (cityName : string) => {
    console.log('ACTION::ADD_CITY');
    console.log('VALUE::'+cityName);
    this.modelHandler.addCity(cityName);

    // just for test 
    this.web.fetchFiveDaysForcast('Paris');
  }

}
