import { Component } from '@angular/core';

@Component({
  selector: 'uxc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ux-challenge';

  navItems = [
    {
      'title': 'View Availability',
      'active': false
    },
    {
      'title': 'Gify Certificates',
      'active': true
    },
    {
      'title': 'General Information',
      'active': false
    },
    {
      'title': 'Loyalty Program & Wine',
      'active': false
    }
  ];
}
