import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataClientComponent } from './add-data-client.component';

describe('AddDataClientComponent', () => {
  let component: AddDataClientComponent;
  let fixture: ComponentFixture<AddDataClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDataClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
