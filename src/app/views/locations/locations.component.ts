import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  @Input() location: Location;

  constructor() { }

  ngOnInit() {
  }

}
