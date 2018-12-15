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
    diet: {
      type: DIET_TYPES.HERBIVORE
    }
  }
];