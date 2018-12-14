import { Location } from './location';
import { Loan } from './loan';

export class Business {
    name: string;
    money: number;
    loans: Array<Loan>;
    locations: Array<Location>;
}