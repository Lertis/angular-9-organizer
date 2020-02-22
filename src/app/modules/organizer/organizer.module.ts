import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Components
import { OrganizerWrapperComponent } from './components/organizer-wrapper/organizer-wrapper.component';
import { SelectorComponent } from './components/selector/selector.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
// Pipes
import { MomentPipe } from './shared/pipes/moment';
// Services
import { DateService } from './shared/services/date.service';
import { TasksService } from './shared/services/task.service';
// Routing
import { OrganizerRoutingModule } from './organizer.routing';

@NgModule({
  declarations: [
    CalendarComponent,
    SelectorComponent,
    OrganizerComponent,
    MomentPipe,
    OrganizerWrapperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrganizerRoutingModule
  ],
  providers: [
    DateService,
    TasksService
  ]
})
export class OrganizerModule { }
