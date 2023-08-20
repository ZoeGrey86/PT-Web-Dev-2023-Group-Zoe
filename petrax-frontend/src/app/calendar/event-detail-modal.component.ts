import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-event-detail-modal',
  templateUrl: './event-detail-modal.component.html',
  styleUrls: ['./event-detail-modal.component.css']
})
export class EventDetailModalComponent {

  @Input() eventId: number;  // Make sure you pass this from your calendar component
  @Input() eventTitle: string;
  @Input() eventStart: Date;
  @Input() eventEnd: Date;
  @Input() eventDescription: string;
  @Output() eventDeleted = new EventEmitter<number>();

  constructor(
    public activeModal: NgbActiveModal,
    private calendarService: CalendarService
  ) {}

  closeModal() {
    this.activeModal.dismiss();
  }

  onDelete() {
    if (this.eventId) {
      this.calendarService.deleteEvent(this.eventId).subscribe(
        () => {
         this.eventDeleted.emit(this.eventId);
          this.closeModal();
        },
        error => {
          // Handle error scenario. E.g., show an error toast/notification.
          console.error('Error deleting the event:', error);
        }
      );
    }
  }
}
