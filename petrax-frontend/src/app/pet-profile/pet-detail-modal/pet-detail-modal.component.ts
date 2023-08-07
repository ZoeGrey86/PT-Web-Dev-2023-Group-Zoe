import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { PetProfile } from './pet-profile';


@Component({
  selector: 'app-pet-detail-modal',
  templateUrl: './pet-detail-modal.component.html',
  styleUrls: ['./pet-detail-modal.component.css']
})
export class PetDetailModalComponent {

  @Input() petName: string;
  @Input() petType: string;
  @Input() petBreed: string;
  @Input() petAge: number;
  @Input() petWeight: number;
  @Input() petBirthdate: Date;
  @Input() petMedication: string;
  @Input() petAllergy: string;
  @Input() petMicrochip: string;
  @Input() petDiagnoses: string;

constructor(public activeModal: NgbActiveModal) {}

  closeModal() {
    this.activeModal.dismiss();
  }

//   constructor(public activeModal: NgbActiveModal) {}
//
// openPetDetailModal(selectedPet: PetProfile) {
//     const modalRef = this.modalService.open(PetDetailModalComponent, { size: 'lg' });
//
    // Pass the data to the modal using @Input properties STATIC
//     modalRef.componentInstance.petName = 'Tegan';
//     modalRef.componentInstance.petBreed = 'Sphynx';
//     modalRef.componentInstance.petAge = 6;
//     modalRef.componentInstance.petWeight = 11;
//     modalRef.componentInstance.petBirthday = 03-03-2017;
//     modalRef.componentInstance.petMedication = 'None';
//     modalRef.componentInstance.petAllergy = 'None';
//     modalRef.componentInstance.petMicrochip = '123456789';
//     modalRef.componentInstance.petDiagnoses = 'Gingivitis';
    // Pass the data to the modal using @Input properties DYNAMIC
//     modalRef.componentInstance.petName = selectedPet.petName;
//     modalRef.componentInstance.petBreed = selectedPet.petBreed;
//     modalRef.componentInstance.petAge = selectedPet.petAge;
//     modalRef.componentInstance.petWeight = selectedPet.petWeight;
//     modalRef.componentInstance.petBirthday =selectedPet.petBirthday;
//     modalRef.componentInstance.petMedication = selectedPet.petMedication;
//     modalRef.componentInstance.petAllergy = selectedPet.petAllergy;
//     modalRef.componentInstance.petMicrochip = selectedPet.petMicrochip;
//     modalRef.componentInstance.petDiagnoses = selectedPet.petDiagnoses;
//   }
//
//   closeModal() {
//     this.activeModal.dismiss();
//   }

}
