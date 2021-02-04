import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common'
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { AppConstants } from 'src/app/core/constants/app-constants';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
  city: String;
  checkoutForm = this.formBuilder.group({
    name: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    let data = {
      "cityName": this.checkoutForm.value.name
    }
    this.httpService.post(environment.baseURL + AppConstants.cities, data).subscribe( res => {
    });
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.location.back();
  }

  cancel() {
    this.location.back();
  }

}
