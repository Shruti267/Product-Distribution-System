import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/core/app-constants';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-data-city',
  templateUrl: './add-data-city.component.html',
  styleUrls: ['./add-data-city.component.scss']
})
export class AddDataCityComponent implements OnInit {
  constructor (
    public router: Router, 
    public route: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.get(environment.baseURL + AppConstants.cities).subscribe( res => {
    });
  }

  addCity() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
