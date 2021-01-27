import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataBrandComponent } from './add-data-brand.component';

describe('AddDataBrandComponent', () => {
  let component: AddDataBrandComponent;
  let fixture: ComponentFixture<AddDataBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataBrandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
