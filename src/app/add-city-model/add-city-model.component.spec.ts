import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCityModelComponent } from './add-city-model.component';

describe('AddCityModelComponent', () => {
  let component: AddCityModelComponent;
  let fixture: ComponentFixture<AddCityModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCityModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCityModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
