import { Component, OnInit, Input } from '@angular/core';

import { Location } from '../../classes/location';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() location: Location;
  @Input() money: number;

  title = 'Dashboard';

  constructor() { }

  ngOnInit() {
  }

  isLocationSet(): boolean {
    if (this.location) {
      return true;
    }
    return false;
  }

}
