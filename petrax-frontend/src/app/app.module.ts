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

import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AddPetModalComponent } from './pet-profile/add-pet-modal.component';
import { PetDetailModalComponent } from './pet-profile/pet-detail-modal.component';
import { DeletePetModalComponent } from './pet-profile/delete-pet-modal.component';
import { PetProfileService } from './pet-profile/pet-profile.service';
import { PetProfileUpdateService } from './pet-profile/pet-profile-update.service';
import { CareProfessionalComponent } from './care-professional/care-professional.component';
import { AddCareProfessionalComponent } from './care-professional/add-care-professional/add-care-professional.component';
import { UpdateProfessionalComponent } from './care-professional/update-professional/update-professional.component';


import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    UserListComponent,
    LogInComponent,
    RegisterComponent,
    FooterComponent,
    AddPetModalComponent,
    PetDetailModalComponent,
    DeletePetModalComponent,
    CareProfessionalComponent,
    AddCareProfessionalComponent,
    AboutComponent,
    UpdateProfessionalComponent,
    UserProfileComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgbModule,
    RouterModule.forRoot([]), // Make sure you have this line for routing to work
    AppRoutingModule,
    FullCalendarModule,
    MatMenuModule,
    BrowserAnimationsModule,
  ],
  providers: [PetProfileService, PetProfileUpdateService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
