import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PetProfile, PetType } from './pet-profile.model';

@Component({
  selector: 'app-add-pet-modal',
  templateUrl: './add-pet-modal.component.html',
  styleUrls: ['./add-pet-modal.component.css']
})
export class AddPetModalComponent {

newPet: PetProfile = { // Use the imported PetProfile type
    petId: 0,
    petName: '',
    petType: PetType.CAT,
    petBreed: '',
    petAge: 0,
    petWeight: 0,
    petBirthdate: new Date(),
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
