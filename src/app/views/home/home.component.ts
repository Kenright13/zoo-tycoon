import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

import { LOCATIONS } from '../../assets/data/locations';
import { Location } from '../../classes/location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class HomeComponent implements OnInit {
  @Output() named = new EventEmitter();
  @Output() chooseLocation = new EventEmitter();
  @Input() totalMoney: number;
  
  selectedOption: string;
  name: string;
  locations: Array<Location>;
  location: string;

  constructor() { }

  ngOnInit() {
    this.locations = LOCATIONS;
  }

  startGame() {
    this.named.emit(this.name);
    this.chooseLocation.emit(this.location);
  }

  setSelectedOption(option: string): void {
    this.selectedOption = option;
  }

}
