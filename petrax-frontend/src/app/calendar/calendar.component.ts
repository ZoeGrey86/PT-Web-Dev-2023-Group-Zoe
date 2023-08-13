
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Event } from './event.model';
import { EventDetailModalComponent } from './event-detail-modal.component';
import { AddEventModalComponent } from './add-event-modal.component';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

import { CalendarService } from './calendar.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  events: Event[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    eventClick: (eventInfo) => this.handleEventClick(eventInfo)
  };

  constructor(private modalService: NgbModal, private http: HttpClient, private calendarService: CalendarService) {}

  ngOnInit() {
    this.initializeCalendar();
    this.fetchEventsFromServer();
  }

fetchEventsFromServer() {
    this.http.get<any[]>('http://localhost:8080/api/events', { params: { page: '0', size: '3' } })
    .subscribe(
      (data) => {
        this.events = [...this.events, ...data];
        this.initializeCalendar();
      },
      (error) => {
        console.error('Error fetching events', error);
       }
    );
}

  initializeCalendar() {
   this.calendarOptions.events = this.events.map(event => ({
     ...event,
     id: event.id.toString()
   }));
  }

  handleEventClick(eventInfo) {
    const eventId = eventInfo.event.id;
    const eventTitle = eventInfo.event.title;
    const eventStart = eventInfo.event.start;
    const eventEnd = eventInfo.event.end;
    const eventDescription = eventInfo.event.extendedProps.description || eventInfo.event.description;

    const modalRef = this.modalService.open(EventDetailModalComponent);
    modalRef.componentInstance.eventId = eventId;
    modalRef.componentInstance.eventTitle = eventTitle;
    modalRef.componentInstance.eventStart = eventStart;
    modalRef.componentInstance.eventEnd = eventEnd;
    modalRef.componentInstance.eventDescription = eventDescription;
    modalRef.componentInstance.eventDeleted.subscribe((deletedEventId: number) => {
        // Remove the event from the events array
        const eventIndex = this.events.findIndex(event => event.id === deletedEventId);
        if (eventIndex > -1) {
          this.events.splice(eventIndex, 1);
          this.initializeCalendar();  // Re-initialize the calendar
        }
     });
  }

  openAddEventModal() {
    const modalRef = this.modalService.open(AddEventModalComponent);
    modalRef.result.then((newEvent) => {
      // Update your calendar here with the new event
      // This could be by adding it to the local events array, or by re-fetching all events
      this.events.push(newEvent);
      this.initializeCalendar(); // Refresh the calendar to display the new event
    }).catch((error) => {
      console.log('Modal dismissed without saving', error);
    });
  }
}
