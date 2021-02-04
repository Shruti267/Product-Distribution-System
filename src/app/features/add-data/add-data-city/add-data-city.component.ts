import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConstants } from 'src/app/core/constants/app-constants';
import { City } from 'src/app/core/models/city';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-data-city',
  templateUrl: './add-data-city.component.html',
  styleUrls: ['./add-data-city.component.scss']
})

export class AddDataCityComponent implements OnInit {
  cities: MatTableDataSource<City>;
  displayedColumns: string[] = ['position', 'city'];
  constructor (
    public router: Router, 
    public route: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService.get(environment.baseURL + AppConstants.cities).subscribe( res => {
      this.cities = new MatTableDataSource(res.result);
    }, err => {
      console.log(err);
    });
  }

  addCity() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.cities.filter = filterValue.trim().toLowerCase();
  }
}