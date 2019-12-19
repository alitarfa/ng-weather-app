import { Component, OnInit } from "@angular/core";
import { WeatherAPIService } from "../services/weather-api.service";
import { DataImg } from "../model/data";

@Component({
  selector: "app-weather-details",
  templateUrl: "./weather-details.component.html",
  styleUrls: ["./weather-details.component.scss"]
})
export class WeatherDetailsComponent implements OnInit {
  weatherData = {};
  fetched = false;
  math = Math;
  date = new Date();
  currnetImage;
  currentWatherName;
  private dataImage = new DataImg();

  constructor(private api: WeatherAPIService) {}

  ngOnInit() {
    this.api.getDataWeather().subscribe(res => {
      if (res["cod"] == "200") {
        this.fetched = true;
        this.weatherData = res;
        this, (this.currentWatherName = res.list[0].weather[0].main);
        this.currnetImage = this.dataImage.mapImage.get(
          res.list[0].weather[0].main
        );
      }
    });
  }
}
