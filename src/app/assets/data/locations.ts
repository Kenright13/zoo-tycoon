import { Location } from '../../classes/location';

import { AnimalService } from '../../services/animal.service';
import { 
  ANIMAL_NAMES, 
  ANIMAL_TYPES, 
  LOCATION_NAMES
} 
from './constants';

export const LOCATIONS: Array<Location> = [
  {
    name: LOCATION_NAMES.KANSAS_CITY,
    cost: 5000,
    zoo: {
      name: LOCATION_NAMES.KANSAS_CITY + ' Zoo',
      animalTypesAvailable: [ANIMAL_TYPES.BUGS, ANIMAL_TYPES.FOREST, ANIMAL_TYPES.PLAINS],
      animals: [
        AnimalService.getAnimalsByName(ANIMAL_TYPES.BUGS, ANIMAL_NAMES.BUGS.ANT),
        AnimalService.getAnimalsByName(ANIMAL_TYPES.BUGS, ANIMAL_NAMES.BUGS.BEETLE)
      ]
    }
  },
  {
    name: LOCATION_NAMES.BEIJING,
    cost: 1000000000,
    zoo: {
      name: LOCATION_NAMES.BEIJING + ' Zoo',
      animalTypesAvailable: [ANIMAL_TYPES.BUGS, ANIMAL_TYPES.JUNGLE, ANIMAL_TYPES.EXOTIC],
      animals: [
        AnimalService.getAnimalsByName(ANIMAL_TYPES.BUGS, ANIMAL_NAMES.BUGS.ANT)
      ]
    }
  }
];