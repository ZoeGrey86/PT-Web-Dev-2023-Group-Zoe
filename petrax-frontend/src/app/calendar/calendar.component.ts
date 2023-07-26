import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { HttpClient } from '@angular/common/http';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
Events: any[] = [];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
  };
  constructor(private httpClient: HttpClient) {}
  onDateClick(res: any) {
    alert('Clicked on date : ' + res.dateStr);
  }
 onAddEvent() {
    // Implement the logic to handle the "Add Event" button click here.
    // For example, you can show a dialog/modal to let the user add event details.
    // Or you can navigate to a new component/page where the user can add the event.
    console.log("Add Event button clicked!");
  }

  ngOnInit() {
    setTimeout(() => {
      return this.httpClient
        .get('http://localhost:8888/event.php')
        .subscribe((res: any) => {
          this.Events.push(res);
          console.log(this.Events);
        });
    }, 2200);
    setTimeout(() => {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        events: this.Events,
        dateClick: this.onDateClick.bind(this),
      };
    }, 2500);
  }
}
