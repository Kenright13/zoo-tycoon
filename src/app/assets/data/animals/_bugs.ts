import { Animal } from '../../../classes/animal';

import { ANIMAL_NAMES, ANIMAL_TYPES, DIET_TYPES } from '../constants';

export const BUGS: Array<Animal> = [
  {
    name: ANIMAL_NAMES.BUGS.ANT,
    type: ANIMAL_TYPES.BUGS,
    count: 0,
    price: 1,
    death: .0005,
    birth: .001,
    mateSpeed: 10000,
    capacity: 1000,
    image: 'https://source.unsplash.com/random/100x200',
    birthMultiplier: 1,
    deathMultiplier: 1,
    mateMultiplier: 1,
    capacityMultiplier: 1,
    diet: {
      type: DIET_TYPES.HERBIVORE
    }
  },
  {
    name: ANIMAL_NAMES.BUGS.BEETLE,
    type: ANIMAL_TYPES.BUGS,
    count: 0,
    price: 10,
    death: .001,
    birth: .001,
    mateSpeed: 20000,
    capacity: 1000,
    image: 'https://source.unsplash.com/random/100x200',
    birthMultiplier: 1,
    deathMultiplier: 1,
    mateMultiplier: 1,
    capacityMultiplier: 1,
    diet: {
      type: DIET_TYPES.HERBIVORE
    }
  }
];