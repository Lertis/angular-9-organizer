import * as moment from 'moment';

export class Day {
    value: moment.Moment;
    active: boolean;
    disabled: boolean;
    selected: boolean;

    constructor(public v: moment.Moment, public a: boolean, public d: boolean, public s: boolean) {
        this.value = v;
        this.active = a;
        this.disabled = d;
        this.selected = s;
    }
}
