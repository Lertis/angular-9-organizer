import { Component, OnInit } from '@angular/core';
import { DateService } from '../../shared/services/date.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../../shared/models/task';
import { TasksService } from '../..//shared/services/task.service';
import { switchMap } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
  form: FormGroup;
  tasks: Task[] = [];

  constructor(public readonly dateService: DateService, private readonly tasksService: TasksService) {
  }

  ngOnInit() {
    this.dateService.date.pipe(
      switchMap(value => this.tasksService.load(value))
    ).subscribe(tasks => {
      this.tasks = tasks;
    });

    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    });
  }

  submit() {
    const { title } = this.form.value;

    const task = new Task(title, this.dateService.date.value.format('DD-MM-YYYY'));

    this.tasksService.create(task).subscribe((t: any) => {
      this.tasks.push(t);
      this.form.reset();
    }, err => console.error(err));
  }

  remove(task: Task) {
    this.tasksService.remove(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    }, err => console.error(err));
  }
}
