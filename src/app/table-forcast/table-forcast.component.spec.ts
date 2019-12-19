import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableForcastComponent } from './table-forcast.component';

describe('TableForcastComponent', () => {
  let component: TableForcastComponent;
  let fixture: ComponentFixture<TableForcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableForcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableForcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
