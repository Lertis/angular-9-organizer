import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
// Components
import { FullCalendarWrapperComponent } from './components/full-calendar/full-calendar.component';
// Routing
import { CalendarRoutingModule } from './fullcalendar.routing';

@NgModule({
  declarations: [
    FullCalendarWrapperComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    CalendarRoutingModule
  ],
  providers: [
  ]
})
export class CalendarModule { }
