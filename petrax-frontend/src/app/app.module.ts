import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AddPetComponent } from './add-pet/add-pet/add-pet.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CalendarComponent,
    HomeComponent,
    AddPetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FullCalendarModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
