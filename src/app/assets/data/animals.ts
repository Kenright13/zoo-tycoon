import { Animal } from '../../classes/animal';

import { ANIMAL_NAMES, ANIMAL_TYPES, DIET_TYPES } from '../data/constants';

export const ANIMALS: Array<Animal> = [
    {
        name: ANIMAL_NAMES.ANT,
        type: ANIMAL_TYPES.BUG,
        count: 0,
        price: 1,
        death: .0005,
        birth: .001,
        mateSpeed: 10000,
        diet: {
          type: DIET_TYPES.HERBIVORE
        }
      }
];