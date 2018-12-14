import { Location } from '../../classes/location';

import { ANIMALS } from '../data/animals';
import { 
  ANIMAL_NAMES, 
  ANIMAL_TYPES, 
  LOCATION_NAMES
} 
from '../data/constants';

export const LOCATIONS: Array<Location> = [
  {
    name: LOCATION_NAMES.KANSAS_CITY,
    zoo: {
      name: LOCATION_NAMES.KANSAS_CITY + ' Zoo',
      money: 0,
      cost: 5000,
      animalTypesAvailable: [ANIMAL_TYPES.BUG, ANIMAL_TYPES.FOREST, ANIMAL_TYPES.PLAINS],
      animals: [
        ANIMALS.find(x => x.name === ANIMAL_NAMES.ANT),
        ANIMALS.find(x => x.name === ANIMAL_NAMES.ANT)
      ]
    }
  },
  {
    name: LOCATION_NAMES.BEIJING,
    zoo: {
      name: LOCATION_NAMES.BEIJING + ' Zoo',
      money: 0,
      cost: 1000000000,
      animalTypesAvailable: [ANIMAL_TYPES.BUG, ANIMAL_TYPES.JUNGLE, ANIMAL_TYPES.EXOTIC],
      animals: [
        ANIMALS.find(x => x.name === ANIMAL_NAMES.ANT)
      ]
    }
  }
];