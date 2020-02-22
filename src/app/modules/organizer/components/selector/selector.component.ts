import { Component, OnInit } from '@angular/core';
import { DateService } from '../../shared/services/date.service';

@Component({
    // tslint:disable-next-line: component-selector
  selector: 'selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  constructor(public readonly dateService: DateService) { }

  ngOnInit(): void {
  }

  public go(dir: number) {
    this.dateService.changeMonth(dir);
  }

}
