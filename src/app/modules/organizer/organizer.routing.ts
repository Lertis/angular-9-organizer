import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizerWrapperComponent } from './components/organizer-wrapper/organizer-wrapper.component';


const routes: Routes = [
    {
        path: '',
        component: OrganizerWrapperComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrganizerRoutingModule { }
