import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Animal } from '../../classes/animal';
import { Location } from '../../classes/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  @Output() addMoney = new EventEmitter();
  @Input() location: Location;
  @Input() money: number;

  constructor() { }

  ngOnInit() {
    this.birthAnimals();
  }

  birthAnimals(): void {
    this.location.zoo.animals.forEach(animal => {
      this.runner(animal);
    });
  }

  runner(animal: Animal): void {
    const _this = this;
    this.giveBirth(animal);
    setTimeout(function() {
      _this.runner(animal)
    }, animal.mateSpeed);
  }

  giveBirth(animal: Animal): void {
    if (Math.random() <= this.calculateBirth(animal.birth, animal.count)) {
      console.log('GIVING BIRTH TO A: ', animal.name);
      animal.count += 1;
    }
    if (Math.random() <= this.calculateDeath(animal.death, animal.count)) {
      console.log('WE HAVE HAD A DEATH: ', animal.name);
      animal.count -= 1;
    }
  }

  addToMoneyTotal(amount: number): void {
    this.addMoney.emit(amount);
  }

  buyAnimal(animal: Animal, qty: number): void {
    const totalCost = animal.price * qty;
    if (this.money < totalCost) {
      return;
    }
    animal.count += qty;
    this.addToMoneyTotal(totalCost * -1)
  }

  sellAnimal(animal: Animal, qty: number): void {
    if (animal.count < qty) {
      return;
    }

    animal.count -= qty;
    this.addToMoneyTotal(animal.price * qty / 2);
  }

  getAnimalByName(name: string) {
    return this.location.zoo.animals.find(x => x.name === name);
  }

  calculateDeath(death: number, count: number): number {
    return parseFloat((count / 2 * death).toFixed(2));
  }

  calculateBirth(birth: number, count: number): number {
    return parseFloat((count / 2 * birth).toFixed(2));
  }
}
