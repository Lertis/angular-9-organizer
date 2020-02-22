import { Component, AfterViewChecked, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  // tslint:disable-next-line: component-selector
  templateUrl: './full-calendar.component.html'
})
export class FullCalendarWrapperComponent implements OnInit, AfterViewChecked {

  @ViewChild('fullcalendar') calendarComponent: FullCalendarComponent;

  calendarEvents: EventInput[] = [];

  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];

  calendarApi: Calendar;
  initialized = false;

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.calendarApi = this.calendarComponent.getApi();

    if (this.calendarApi && !this.initialized) {
      this.initialized = true;
      this.loadEvents();
    }
  }

  loadEvents() {
    const event = {
      title: 'test',
      start: Date.now(),
      allDay: true
    };
    this.calendarEvents.push(event);
    this.calendarApi.removeAllEventSources();
    this.calendarApi.addEventSource(this.calendarEvents);
  }

  onDateClick(clickedDate: any) {
    console.log(clickedDate);
  }

  onEventClick(clickedEvent: any) {
    console.log(clickedEvent);
  }

  onEventRender(info: any) {
    console.log('onEventRender', info.el);
  }
}
