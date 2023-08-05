import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pet-detail-modal',
  templateUrl: './pet-detail-modal.component.html',
  styleUrls: ['./pet-detail-modal.component.css']
})
export class PetDetailModalComponent {

  @Input() petName: string;
  @Input() petBreed: string;
  @Input() petAge: number;
  @Input() petWeight: number;
  @Input() petBirthday: Date;
  @Input() petMedication: string;
  @Input() petAllergy: string;
  @Input() petMicrochip: string;
  @Input() petDiagnoses: string;


  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.dismiss();
  }

}
