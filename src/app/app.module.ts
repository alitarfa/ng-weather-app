import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherTableComponent } from './weather-table/weather-table.component';
import {HttpClientModule} from '@angular/common/http';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AddCityComponent } from './add-city/add-city.component';
import { AddCityModelComponent } from './add-city-model/add-city-model.component';
import { WeatherCitiesComponent } from './weather-cities/weather-cities.component';
import { CardCityComponent } from './card-city/card-city.component';
import { TableForcastComponent } from './table-forcast/table-forcast.component';
import { WeatherAPIService } from './services/weather-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { NotifierModule } from "angular-notifier";
 


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeatherDetailsComponent,
    WeatherTableComponent,
    AddCityComponent,
    AddCityModelComponent,
    WeatherCitiesComponent,
    CardCityComponent,
    TableForcastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    NotifierModule.withConfig({
    
  })
  ],
  providers: [WeatherAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
