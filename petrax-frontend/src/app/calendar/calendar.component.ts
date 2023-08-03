import { Component, OnInit } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/angular';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { EventDetailModalComponent } from './event-detail-modal.component';
import { AddEventModalComponent } from './add-event-modal.component';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  events: any[] = [
  {
     title: 'Theodore has an appt ',
     start: '2023-08-20T10:00:00',
     end: '2023-08-20T14:00:00',
     description: 'This is amazing',
  },
  {
     title: 'Our project is DUE!! ',
     start: '2023-08-14T10:00:00',
     end: '2023-08-14T14:00:00',
     description: 'WE GOT THIS',
  },
  ];
  calendarOptions: CalendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
         left: 'prev,next today',
         center: 'title',
         right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: this.events,
      eventClick: this.handleEventClick.bind(this)
  };

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  ngOnInit() {
    this.fetchEventsFromServer();
  }

  fetchEventsFromServer() {
    this.http.get<any[]>('/api/events', { params: { page: '0', size: '3' } }).subscribe((data) => {
      this.events = [...this.events, ...data];
      this.initializeCalendar();
    });
  }

  initializeCalendar() {
    this.calendarOptions.events = this.events
 }

//       plugins: [dayGridPlugin, interactionPlugin],
//       initialView: 'dayGridMonth',
//       headerToolbar: {
//         left: 'prev,next today',
//         center: 'title',
//         right: 'dayGridMonth,timeGridWeek,timeGridDay'
//       },
//       events: this.events,
//       eventClick: this.handleEventClick.bind(this)
//     };


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
  }

  openAddEventModal() {
    const modalRef = this.modalService.open(AddEventModalComponent);
    modalRef.result.then((result) => {
      if (result) {
        const newEvent = result;
        this.events.push(newEvent);
        this.http.post('/api/events', newEvent).subscribe(() => {
          console.log('Event added successfully.');
          this.initializeCalendar(); // refresh the calendar to display the new event
        });
      }
    });
  }
}
