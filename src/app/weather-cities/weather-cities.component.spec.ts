import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCitiesComponent } from './weather-cities.component';

describe('WeatherCitiesComponent', () => {
  let component: WeatherCitiesComponent;
  let fixture: ComponentFixture<WeatherCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
