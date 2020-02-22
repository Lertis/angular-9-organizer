import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullCalendarWrapperComponent } from './components/full-calendar/full-calendar.component';


const routes: Routes = [
    {
        path: '',
        component: FullCalendarWrapperComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CalendarRoutingModule { }
