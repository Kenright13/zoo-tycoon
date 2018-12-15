import { Injectable } from '@angular/core';

import { Animal } from '../classes/animal';
import { getAnimals } from '../assets/data/animals/animals';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public static getAnimalsByName(type: string, name: string): Animal {
    return this.getAnimalsByType(type).find(x => x.name === name);
  }

  public static getAnimalsByType(type: string): Array<Animal> {
    return getAnimals().filter(x => x.type === type);
  }
  constructor() { }
}
