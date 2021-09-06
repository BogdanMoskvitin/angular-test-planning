import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanningComponent } from './planning/planning.component';
import { GroupComponent } from './group/group.component';
import { IndividualComponent } from './individual/individual.component';
import { TosheduleComponent } from './toshedule/toshedule.component';
import { MainComponent } from './main/main.component';
import { ParticipantsComponent } from './participants/participants.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanningComponent,
    GroupComponent,
    IndividualComponent,
    TosheduleComponent,
    MainComponent,
    ParticipantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
