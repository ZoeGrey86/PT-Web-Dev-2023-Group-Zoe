import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PetProfile, PetType } from './pet-profile.model';
import { User } from '../user/user';

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
    petDiagnoses: '',
    user: { id: 123,
          firstName: 'John',
          lastName: 'Doe',
          contactEmail: 'john@example.com',
          password: 'yourPassword',
          address: '123 Main St' }
  };

  constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.dismiss();
  }

  onSubmit() {
    this.activeModal.close(this.newPet);
  }

}
