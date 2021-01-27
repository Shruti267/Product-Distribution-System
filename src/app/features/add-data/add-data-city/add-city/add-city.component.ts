import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
  city: String;
  isValid: Boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  Submit() {

  }

  valuechange(event: any) {
    event ? this.isValid = true : this.isValid = false;
  }

}
