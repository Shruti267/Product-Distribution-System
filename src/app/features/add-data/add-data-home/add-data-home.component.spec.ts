import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataHomeComponent } from './add-data-home.component';

describe('AddDataHomeComponent', () => {
  let component: AddDataHomeComponent;
  let fixture: ComponentFixture<AddDataHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
