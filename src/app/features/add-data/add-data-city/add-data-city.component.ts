import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-data-city',
  templateUrl: './add-data-city.component.html',
  styleUrls: ['./add-data-city.component.scss']
})
export class AddDataCityComponent implements OnInit {
  addNew: Boolean = false;
  constructor (
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  addCity() {
    this.addNew = true;
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
