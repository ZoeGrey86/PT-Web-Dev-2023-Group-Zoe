import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-pet-modal',
  templateUrl: './add-pet-modal.component.html',
  styleUrls: ['./add-pet-modal.component.css']
})
export class AddPetModalComponent {

newPet: any = { // Object to store the new pet details
    petName: '',
    petType: '',
    petBreed: '',
    petAge: '',
    petWeight: '',
    petBirthdate: '',
    petMedication: '',
    petAllergy: '',
    petMicrochip: '',
    petDiagnoses: ''

  };

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.dismiss();
  }

  onSubmit() {
    this.activeModal.close(this.newPet);
  }

}
