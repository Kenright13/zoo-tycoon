import { Injectable } from '@angular/core';

import { Animal } from '../classes/animal';
import { Location } from '../classes/location';
import { getAnimals } from '../assets/data/animals/animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public static getAnimalsByName(location: Location, name: string): Animal {
    return getAnimals().find(x => x.name === name);
  }

  public static getAnimalsByType(location: Location, type: string): Array<Animal> {
    return getAnimals().filter(x => x.type === type);
  }

  public static getBirthRate(animal: Animal): number {
    return animal.count / 2 * animal.birth * animal.birthMultiplier;
  }

  public static getBirthRateByName(location: Location, name: string): number {
    const animal = this.getAnimalsByName(location, name);
    return this.getBirthRate(animal);
  }

  public static getDeathRate(animal: Animal): number {
    return animal.count / 2 * animal.death * animal.deathMultiplier;
  }

  public static getDeathRateByName(location: Location, name: string): number {
    const animal = this.getAnimalsByName(location, name);
    return this.getDeathRate(animal);
  }

  public static getMatingSpeed(animal: Animal): number {
    return animal.mateSpeed * animal.mateMultiplier;
  }

  public static getMatingSpeedByName(location: Location, name: string): number {
    const animal = this.getAnimalsByName(location, name);
    return this.getMatingSpeed(animal);
  }

  public static getCapacity(animal): number {
    return animal.capacity * animal.capacityMultiplier;
  }

  public static getCapacityByName(location: Location, name: string): number {
    const animal = this.getAnimalsByName(location, name);
    return this.getCapacity(animal);
  }

  public static canPurchase(animal: Animal, qty: number, money: number): boolean {
    const totalCost = animal.price * qty;
    if (totalCost > money) {
      return false;
    }

    const totalAnimalsAfterPurchase = animal.count + qty;
    if (totalAnimalsAfterPurchase > this.getCapacity(animal)) {
      return false;
    }

    return true;
  }

  
  constructor() { }
}
