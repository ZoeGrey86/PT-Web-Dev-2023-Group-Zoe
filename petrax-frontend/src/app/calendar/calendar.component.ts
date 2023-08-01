import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';

import { CalendarOptions } from '@fullcalendar/angular';

// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { EventDetailModalComponent } from './calendar/event-detail-modal.component';
import { AddEventModalComponent } from './calendar/add-event-modal.component';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  events: any[] = [];
  calendarOptions: CalendarOptions;

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  ngOnInit() {
  this.fetchEventsFromServer();
  this.calendarOptions = {
    initialView: 'dayGridMonth',
    headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: this.events,
    eventClick: this.handleEventClick.bind(this)
  };
}
fetchEventsFromServer() {
    this.http.get<any[]>('/api/events', { params: { page: '0', size: '3' } }).subscribe((data) => {
      this.events = data;
    });
  }
  handleEventClick(eventInfo) {
      // Implement the logic to handle event click (e.g., show event details in a modal)
      const eventId = eventInfo.event.id;
      const eventTitle = eventInfo.event.title;
      const eventStart = eventInfo.event.start;
      // You can use Bootstrap modal to display event details, or any other method you prefer
      const modalRef = this.modalService.open(EventDetailModalComponent);
      modalRef.componentInstance.eventId = eventId;
      modalRef.componentInstance.eventTitle = eventTitle;
      modalRef.componentInstance.eventStart = eventStart;
    }

    openAddEventModal() {
      // Implement the logic to open a modal for adding events
      const modalRef = this.modalService.open(AddEventModalComponent);
      modalRef.result.then((result) => {
        // Handle the result from the modal (e.g., add the new event to the calendar and save it to the server)
        if (result) {
          const newEvent = result;
          this.events.push(newEvent);
          this.http.post('/api/events', newEvent).subscribe(() => {
            console.log('Event added successfully.');
          });
        }
      });
    }
  }
