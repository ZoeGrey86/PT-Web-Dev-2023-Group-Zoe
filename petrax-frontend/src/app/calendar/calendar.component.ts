import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  upcomingEvents = [
    { title: 'Event 1', start: '2023-07-30' },
    { title: 'Event 2', start: '2023-08-02' },
    { title: 'Event 3', start: '2023-08-05' }
  ];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title', // This will display the month and year at the top
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialView: 'dayGridMonth',
    events: this.upcomingEvents
  };

  openAddEventModal() {
    // Your logic to open the modal for adding events
  }
}




// import { Component } from '@angular/core';
// import { FullCalendarModule } from '@fullcalendar/angular';
// import { CalendarOptions } from '@fullcalendar/angular';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction';
//
// import { HttpClient } from '@angular/common/http';
//
//
// @Component({
//   selector: 'app-calendar',
//   templateUrl: './calendar.component.html',
//   styleUrls: ['./calendar.component.css']
// })
// export class CalendarComponent {
//   calendarVisible = true;
//
//  // Add the methods: goPrev, goNext, goToday
//   goPrev() {
//     // Implement the logic to go to the previous period (e.g., previous month or week)
//     // You can use the FullCalendar API to change the view or date as needed
//   }
//
//   goNext() {
//     // Implement the logic to go to the next period (e.g., next month or week)
//     // You can use the FullCalendar API to change the view or date as needed
//   }
//
//   goToday() {
//     // Implement the logic to go to today's date
//     // You can use the FullCalendar API to change the view or date as needed
//   }
//
//   // Add the missing property: upcomingEvents
//   upcomingEvents = [
//     // Sample event data (you can replace this with your actual event data)
//     { title: 'Event 1', start: '2023-07-30' },
//     { title: 'Event 2', start: '2023-08-02' },
//     { title: 'Event 3', start: '2023-08-05' }
//   ];
//
//   calendarOptions: CalendarOptions = {
//     plugins: [
//       dayGridPlugin,
//       interactionPlugin
//     ],
//     headerToolbar: {
//       left: 'prev, next today',
//       center: 'Petrax Calendar',
//       right: 'dayGridMonth,timeGridWeek,timeGridDay'
//     },
//     initialView: 'dayGridMonth'
//   };
//    // Add the missing method: openAddEventModal
//     openAddEventModal() {
//       // Implement the logic to open a modal for adding events
//       // You can use a library like Angular Material or ngx-bootstrap to create the modal
//       // For demonstration purposes, you can use a simple JavaScript alert as follows:
//       alert('Implementing the logic to open the Add Event modal.');
//     }
// }
//
