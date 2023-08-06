import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { AddEventModalComponent } from './calendar/add-event-modal.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventDetailModalComponent } from './calendar/event-detail-modal.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddNewPetSuccessComponent } from './pet-profile/add-new-pet-success/add-new-pet-success.component';
import { AddPetModalComponent } from './pet-profile/add-pet-modal/add-pet-modal.component';
import { PetDetailModalComponent } from './pet-profile/pet-detail-modal/pet-detail-modal.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);

@NgModule({
  declarations: [
    AddEventModalComponent,
    CalendarComponent,
    EventDetailModalComponent,
    FaqComponent,
    HomeComponent,
    NavbarComponent,
    PetProfileComponent,
    AddNewPetSuccessComponent,
    AddPetModalComponent,
    PetDetailModalComponent,
    UserListComponent,
    AppComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([]), // Make sure you have this line for routing to work
    NgbModule,
    AppRoutingModule,
    FullCalendarModule
  ],

  providers: [],

  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class AppModule {}
