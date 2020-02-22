export class Task {
    public id: string;
    public title: string;
    public date: string;
    constructor(public t: string, public d: string, public i?: string) {
        this.id = i;
        this.title = t;
        this.date = d;
    }
}
