import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { FullCalendarModule } from '@fullcalendar/angular';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { EventDetailModalComponent } from './calendar/event-detail-modal.component';
import { AddEventModalComponent } from './calendar/add-event-modal.component';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { AddNewPetSuccessComponent } from './pet-profile/add-new-pet-success/add-new-pet-success.component';
import { AddPetModalComponent } from './pet-profile/add-pet-modal/add-pet-modal.component';
import { PetDetailModalComponent } from './pet-profile/pet-detail-modal/pet-detail-modal.component';

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CalendarComponent,
    HomeComponent,
    FaqComponent,
    EventDetailModalComponent,
    AddEventModalComponent,
    NavbarComponent,
    PetProfileComponent,
    AddNewPetSuccessComponent,
    AddPetModalComponent,
    PetDetailModalComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgbModule,
    RouterModule.forRoot([]), // Make sure you have this line for routing to work
    AppRoutingModule,
    FullCalendarModule
  ],

  providers: [],

  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class AppModule {}
