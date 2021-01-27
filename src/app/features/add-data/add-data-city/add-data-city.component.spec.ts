import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataCityComponent } from './add-data-city.component';

describe('AddDataCityComponent', () => {
  let component: AddDataCityComponent;
  let fixture: ComponentFixture<AddDataCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
