import { Component } from '@angular/core';

import { LOCATIONS } from './assets/data/locations';

import { Location } from './classes/location';
import { Business } from './classes/business';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  business: Business = {
    name: 'My Business',
    money: 0,
    locations: LOCATIONS
  }
  currentLocation: string;
  title = 'zoo-tycoon';

  getCurrentLocation(): Location {
    if (!this.currentLocation) {
      return null;
    }
    return this.business.locations.find(location => location.name === this.currentLocation) || null;
  }
}
