import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uxc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items = [
    {
      'title': 'Locations',
      'active': false
    },
    {
      'title': 'Check Rates',
      'active': true
    },
    {
      'title': 'Gifts',
      'active': false
    },
    {
      'title': 'Food & Wine',
      'active': false
    },
    {
      'title': 'About',
      'active': false
    },
    {
      'title': 'Contact',
      'active': false
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
