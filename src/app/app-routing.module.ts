import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'organaizer',
    pathMatch: 'full'
  },
  {
    path: 'organaizer',
    loadChildren: () => import('./modules/organizer/organizer.module').then(m => m.OrganizerModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
