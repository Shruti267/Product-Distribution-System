import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-data-client',
  templateUrl: './add-data-client.component.html',
  styleUrls: ['./add-data-client.component.scss']
})
export class AddDataClientComponent implements OnInit {

  constructor (
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  addClient() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
