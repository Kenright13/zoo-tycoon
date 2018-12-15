import { Animal } from '../../../classes/animal';

import { BUGS } from './_bugs';

export function getAnimals(): Array<Animal> {
    return [].concat(BUGS);
}