import { TestBed } from '@angular/core/testing';

import { WeatherAPIService } from './weather-api.service';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';

describe('WeatherAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherAPIService = TestBed.get(WeatherAPIService);
    expect(service).toBeTruthy();
  });
});

