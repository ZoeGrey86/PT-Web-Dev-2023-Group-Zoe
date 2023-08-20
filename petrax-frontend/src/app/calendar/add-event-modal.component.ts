import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-add-event-modal',
  templateUrl: './add-event-modal.component.html',
  styleUrls: ['./add-event-modal.component.css']
})
export class AddEventModalComponent {
  newEvent: any = {
    title: '',
    start: '',
    end: '',
    description: ''
  };

  constructor(
    public activeModal: NgbActiveModal,
    private calendarService: CalendarService
  ) {}

  closeModal() {
    this.activeModal.dismiss();
  }

  onSubmit() {
    this.calendarService.addEvent(this.newEvent).subscribe(response => {
        console.log('Event added to database:', response);
        // Close the modal and send the new event back to the parent
        this.activeModal.close(response);
    }, error => {
        console.error('Error adding event:', error);
    });
  }
}
