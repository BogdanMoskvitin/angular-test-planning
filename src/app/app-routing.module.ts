import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanningComponent } from './planning/planning.component';
import { GroupComponent } from './group/group.component';
import { IndividualComponent } from './individual/individual.component';
import { TosheduleComponent } from './toshedule/toshedule.component';
import { MainComponent } from './main/main.component';
import { ParticipantsComponent } from './participants/participants.component';

const routes: Routes = [
  { path: 'planning', component: PlanningComponent, children: [
    { path: 'group', component: GroupComponent },
    { path: 'individual', component: IndividualComponent },
    { path: '',   redirectTo: 'group', pathMatch: 'full' }
  ] },
  { path: 'toshedule', component: TosheduleComponent, children: [
    { path: 'main', component: MainComponent },
    { path: 'participants', component: ParticipantsComponent },
    { path: '',   redirectTo: 'main', pathMatch: 'full' }
  ] },
  { path: '',   redirectTo: 'planning', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
