import { Component, OnInit } from '@angular/core';

import { LOCATIONS } from './assets/data/locations';

import { Location } from './classes/location';
import { Business } from './classes/business';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  ngOnInit() {
    this.setCurrentLocation("Kansas City");
    this.isLocation();
  }

  business: Business = {
    name: 'My Business',
    money: 6000,
    loans: [
      { amount: 6000, duration: 60, rate: 0.05 }
    ],
    locations: LOCATIONS
  }

  currentLocation: string;
  title = 'zoo-tycoon';

  setBusinessName(name: string): void {
    this.business.name = name;
  }

  setCurrentLocation(location: string): void {
    this.currentLocation = location;
  }

  addMoney(amount: number) {
    this.business.money += amount;
  }

  isLocation(): boolean {
    if (this.getCurrentLocation() != null) {
      return true;
    }
    return false;
  }

  getCurrentLocation(): Location {
    if (!this.currentLocation) {
      return null;
    }
    return this.business.locations.find(location => location.name === this.currentLocation) || null;
  }
}
