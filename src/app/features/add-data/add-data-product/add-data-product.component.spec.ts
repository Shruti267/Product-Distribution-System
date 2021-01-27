import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataProductComponent } from './add-data-product.component';

describe('AddDataProductComponent', () => {
  let component: AddDataProductComponent;
  let fixture: ComponentFixture<AddDataProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
