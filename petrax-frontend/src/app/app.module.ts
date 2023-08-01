import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { EventDetailModalComponent } from './calendar/event-detail-modal.component';
import { AddEventModalComponent } from './calendar/add-event-modal.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CalendarComponent,
    HomeComponent,
    FaqComponent,
    EventDetailModalComponent,
    AddEventModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([]), // Make sure you have this line for routing to work
    AppRoutingModule,
    FullCalendarModule.forRoot({
      // Register the FullCalendar plugins here
      plugins: [dayGridPlugin, interactionPlugin],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
