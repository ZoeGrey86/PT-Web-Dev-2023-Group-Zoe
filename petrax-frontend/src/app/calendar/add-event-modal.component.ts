// add-event-modal.component.ts

import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-event-modal',
  templateUrl: './add-event-modal.component.html',
  styleUrls: ['./add-event-modal.component.css']
})
export class AddEventModalComponent {
  newEvent: any = {}; // Object to store the new event details

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.dismiss();
  }

  onSubmit() {
    // Implement the logic to add the new event to the calendar and save it to the server
    // For demonstration purposes, let's just pass the new event data back to the parent component
    this.activeModal.close(this.newEvent);
  }
}

