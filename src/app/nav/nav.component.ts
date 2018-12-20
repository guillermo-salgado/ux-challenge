import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'uxc-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() items: any;
  @Input() display: string;

  constructor() { }

  ngOnInit() {
  }

}
