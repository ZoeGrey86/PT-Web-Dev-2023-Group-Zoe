import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { PetProfile } from './pet-profile';
import { AddPetModalComponent } from './add-pet-modal/add-pet-modal.component';
import { PetDetailModalComponent } from './pet-detail-modal/pet-detail-modal.component';

@Component({
  providers: [DatePipe],
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {

  pets: PetProfile[] = [];

constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.fetchPetsFromServer();
  }

  fetchPetsFromServer() {
    this.http.get<PetProfile[]>('/api/pet-profile', { params: { page: '0', size: '3' } })
      .subscribe((data) => {
        this.pets = [...this.pets, ...data];
        // No need for initializePetProfile() here, directly update pets array
      });
  }

  handlePetClick(petInfo: PetProfile) {
    const modalRef = this.modalService.open(PetDetailModalComponent);
    modalRef.componentInstance.petName = petInfo.petName;
    modalRef.componentInstance.petType = petInfo.petType;
    modalRef.componentInstance.petBreed = petInfo.petBreed;
    modalRef.componentInstance.petAge = petInfo.petAge;
    modalRef.componentInstance.petWeight = petInfo.petWeight;
    modalRef.componentInstance.petBirthday = petInfo.petBirthday;
    modalRef.componentInstance.petMedication = petInfo.petMedication;
    modalRef.componentInstance.petAllergy = petInfo.petAllergy;
    modalRef.componentInstance.petMicrochip = petInfo.petMicrochip;
    modalRef.componentInstance.petDiagnoses = petInfo.petDiagnoses;
  }

//   openAddPetModal() {
//     const modalRef = this.modalService.open(AddPetModalComponent);
//     modalRef.result.then((result: PetProfile) => {
//       if (result) {
//         this.pets.push(result);
//         this.http.post('/api/pet-profile', result).subscribe(() => {
//           console.log('Pet added successfully.');
//           // No need for initializePetProfile() here, directly update pets array
//         });
//       }
//     });
//   }
openAddPetModal() {
  const modalRef = this.modalService.open(AddPetModalComponent);
  modalRef.result.then((result: PetProfile) => {
    if (result) {
      // Format the pet's birthday using DatePipe
      result.petBirthday = this.datePipe.transform(result.petBirthday, 'yyyy-MM-dd');

      // Push the formatted pet to the array
      this.pets.push(result);

      // Send POST request with the formatted pet
      this.http.post('/api/pet-profile', result).subscribe(() => {
        console.log('Pet added successfully.');
        // No need for initializePetProfile() here, directly update pets array
      });
    }
  });
}


}
