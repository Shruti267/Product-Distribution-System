import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataMillComponent } from './add-data-mill.component';

describe('AddDataMillComponent', () => {
  let component: AddDataMillComponent;
  let fixture: ComponentFixture<AddDataMillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataMillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataMillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
