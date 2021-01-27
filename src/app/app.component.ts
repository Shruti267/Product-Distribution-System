import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentTab: String;

  constructor(
    private router: Router
  ) 
  {}

  openTab(tab: String) {
    this.currentTab = tab;
    this.router.navigate([tab]);
  }
}
