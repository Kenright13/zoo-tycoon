import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() businessName: string;
  @Input() businessLocation: string;
  
  selectedOption: string;

  constructor() { }

  ngOnInit() {
  }

  setSelectedOption(option: string): void {
    console.log('SET SELECTED OPTION', option);
    this.selectedOption = option;
  }

}
