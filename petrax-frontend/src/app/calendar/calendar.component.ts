import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Event } from './event.model';
import { EventDetailModalComponent } from './event-detail-modal.component';
import { AddEventModalComponent } from './add-event-modal.component';

import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import rrulePlugin from '@fullcalendar/rrule';

import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  allEvents: Event[] = [];
  upcomingEvents: Event [] = [];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, rrulePlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    eventClick: (eventInfo) => this.handleEventClick(eventInfo)
  };

  constructor(private modalService: NgbModal, private http: HttpClient) {}

 ngOnInit() {
     this.fetchAllEventsForCalendar();
     this.fetchUpcomingEvents();
   }

   fetchAllEventsForCalendar() {
     this.http.get<any[]>('http://localhost:8080/api/events')
       .subscribe(
         (data) => {
           this.allEvents = data;
           this.initializeCalendar();
         },
         (error) => {
           console.error('Error fetching all events', error);
         }
       );
   }

   fetchUpcomingEvents() {
        this.http.get<any[]>('http://localhost:8080/api/events', { params: { page: '0', size: '5' } })
          .subscribe(
            (data) => {
              this.upcomingEvents = data;
            },
            (error) => {
              console.error('Error fetching upcoming events', error);
            }
          );
      }


   initializeCalendar() {
     this.calendarOptions.events = this.allEvents.map(event => ({
         ...event,
         id: event.id.toString(),
         rrule: event.rrule ? {
             freq: event.rrule.freq,
             interval: event.rrule.interval,
             byweekday: event.rrule.byweekday,
             dtstart: event.rrule.dtstart
         } : null
     }));
   }

  handleEventClick(eventInfo) {
    const eventId = eventInfo.event.id;
    const eventTitle = eventInfo.event.title;
    const eventStart = eventInfo.event.start;
    const eventEnd = eventInfo.event.end;
    const eventDescription = eventInfo.event.description || '';

    const modalRef = this.modalService.open(EventDetailModalComponent);
    modalRef.componentInstance.eventId = eventId;
    modalRef.componentInstance.eventTitle = eventTitle;
    modalRef.componentInstance.eventStart = eventStart;
    modalRef.componentInstance.eventEnd = eventEnd;
    modalRef.componentInstance.eventDescription = eventDescription;
    modalRef.componentInstance.eventDeleted.subscribe((deletedEventId: number) => {
      const eventIndex = this.allEvents.findIndex(event => event.id === deletedEventId);
      if (eventIndex > -1) {
        this.allEvents.splice(eventIndex, 1);
      }
    });
  }

  openAddEventModal() {
    const modalRef = this.modalService.open(AddEventModalComponent);
    modalRef.result.then((newEvent) => {
      this.allEvents.push(newEvent);
    }).catch((error) => {
      console.log('Modal dismissed without saving', error);
    });
  }

  openEventDetailModal(event: Event) {
    const modalRef = this.modalService.open(EventDetailModalComponent);
    modalRef.componentInstance.eventId = event.id;
    modalRef.componentInstance.eventTitle = event.title;
    modalRef.componentInstance.eventStart = event.start;
    modalRef.componentInstance.eventEnd = event.end;
    modalRef.componentInstance.eventDescription = event.description || event.description;
    modalRef.componentInstance.eventDeleted.subscribe((deletedEventId: number) => {
      const eventIndex = this.allEvents.findIndex(e => e.id === deletedEventId);
      if (eventIndex > -1) {
        this.allEvents.splice(eventIndex, 1);
      }
    });
  }
}
