import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-data-home',
  templateUrl: './add-data-home.component.html',
  styleUrls: ['./add-data-home.component.scss']
})
export class AddDataHomeComponent implements OnInit {
  selectedValue: String;
  constructor (
    private router: Router, 
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  selctCategory() {
    if (this.selectedValue) {
      this.router.navigate([this.selectedValue.toLowerCase()], {relativeTo: this.route});
    }
  }

}
