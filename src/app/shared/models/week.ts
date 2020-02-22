import { Day } from './day';

export class Week {
    days: Day[];
    constructor(public d: Day[]) {
        this.days = d;
    }
}
