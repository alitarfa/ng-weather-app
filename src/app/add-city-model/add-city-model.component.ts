import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActionHandlerService } from "../services/action-handler.service";
import { ModelHandlerService } from "../services/model-handler.service";
import { WeatherAPIService } from "../services/weather-api.service";
import { NotifierService } from "angular-notifier";
 
@Component({
  selector: "app-add-city-model",
  templateUrl: "./add-city-model.component.html",
  styleUrls: ["./add-city-model.component.scss"]
})
export class AddCityModelComponent implements OnInit {
  private modelState = false;
  @ViewChild("basicModal", { static: false }) myModel;
  private readonly notifier: NotifierService;
 
  constructor(
    private notification : NotifierService,
    private actionhandler: ActionHandlerService,
    private modelHandler: ModelHandlerService,
    private web: WeatherAPIService
  ) {
    this.notifier = notification;
  }

  ngOnInit() {
    this.actionhandler.currentModelState.subscribe(res => {
      console.log(res);
      if (res) this.openModel();
    });
  }

  openModel = () => {
    console.log("ACTION::OPEN_MODEL::COMPONENT");
    this.myModel.show();
  };

  closeModel = () => {
    console.log("ACTION::CLOSE_MODEL::COMPONENT");
  };

  addCity = (cityName: string) => {
    console.log("ACTION::ADD_CITY");
    console.log("VALUE::" + cityName);
    if (cityName == "") {
      // Notification
    } else {
      let listCities = this.modelHandler.getListCities();
      if (listCities.length == 0) {
        this.modelHandler.addCity(cityName);
        this.myModel.hide();
      } else {
        let filtred = listCities.filter(elem => elem.name === cityName);
        console.log(filtred);
        if (filtred.length != 0) {
          // Notification
        } else {
          this.modelHandler.addCity(cityName);
          this.myModel.hide();
        }
      }
    }
  };
}
