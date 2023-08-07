import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// provides the Angular implementation of the Bootstrap Modal component.
import { HttpClient } from '@angular/common/http';
//provides an HTTP client for making requests to the server.
import { AddPetModalComponent } from './add-pet-modal/add-pet-modal.component';
//allows users to add new pets to the profile
import { PetDetailModalComponent } from './pet-detail-modal/pet-detail-modal.component';
//displays the details of a pet
import { PetProfile } from '../pet-profile';
import { PetProfileService } from '../pet-profile.service';



@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {
  pets: PetProfile[] = [
  {
     petName: 'Tegan',
     petType: 'Cat',
     petBreed: 'Sphynx',
     petAge: '6',
     petWeight: '11',
     petBirthdate: '2017-03-03',
     petMedication: 'None',
     petAllergy: 'None',
     petMicrochip: '123456789',
     petDiagnoses: 'Gingivitis',
  },
  {
        petName: 'Gordon',
        petType: 'Dog',
        petBreed: 'Pittador',
        petAge: '7',
        petWeight: '33',
        petBirthdate: '2016-01-04',
        petMedication: 'Apoquel',
        petAllergy: 'None',
        petMicrochip: '987654321',
        petDiagnoses: 'Anxiety',

  }
  ];

  constructor(private modalService: NgbModal, private http: HttpClient) {}


  ngOnInit() {
    this.fetchPetsFromServer();
  }

  fetchPetsFromServer() {
    this.http.get<PetProfile[]>('/api/pet-profile', { params: { page: '0', size: '3' } })
      .subscribe((data) => {
        this.pets = [...this.pets, ...data];
          this.initializePetProfile();
      });
  }

   initializePetProfile() {}

  handlePetClick(petInfo) {
    const petName = petInfo.pet.petName;
    const petType = petInfo.pet.petType;
    const petBreed = petInfo.pet.petBreed;
    const petAge = petInfo.pet.petAge;
    const petWeight = petInfo.pet.petWeight;
    const petBirthdate = petInfo.pet.petBirthdate;
    const petMedication = petInfo.pet.petMedication;
    const petAllergy = petInfo.pet.petAllergy;
    const petMicrochip = petInfo.pet.petMicrochip;
    const petDiagnoses = petInfo.pet.petDiagnoses;

    const modalRef = this.modalService.open(PetDetailModalComponent);
    modalRef.componentInstance.petName = petName;
    modalRef.componentInstance.petType = petType;
    modalRef.componentInstance.petBreed = petBreed;
    modalRef.componentInstance.petAge = petAge;
    modalRef.componentInstance.petWeight = petWeight;
    modalRef.componentInstance.petBirthdate = petBirthdate;
    modalRef.componentInstance.petMedication = petMedication;
    modalRef.componentInstance.petAllergy = petAllergy;
    modalRef.componentInstance.petMicrochip = petMicrochip;
    modalRef.componentInstance.petDiagnoses = petDiagnoses;
  }


openAddPetModal() {
  const modalRef = this.modalService.open(AddPetModalComponent);
  modalRef.result.then((result) => {
    if (result) {
      const newPet: PetProfile = {
        petName: result.petName,
        petType: result.petType,
        petBreed: result.petBreed,
        petAge: result.petAge,
        petWeight: result.petWeight,
        petBirthdate: new Date (result.petBirthdate),
        petMedication: result.petMedication,
        petAllergy: result.petAllergy,
        petMicrochip: result.petMicrochip,
        petDiagnoses: result.petDiagnoses
      };

      this.pets.push(newPet);
      this.http.post('/api/pet-profile', newPet).subscribe(() => {
        console.log('Pet added successfully.');
      });
    }
  });
}

//   openAddPetModal() {
//     const modalRef = this.modalService.open(AddPetModalComponent);
//     modalRef.result.then((result) => {
//       if (result) {
//         this.pets.push(newPet);
//         this.http.post('/api/pet-profile', newPet).subscribe(() => {
//           console.log('Pet added successfully.');
//             this.initializePetProfile(); // refresh the profile to display the new pet
//         });
//       }
//     });
//   }

// openAddPetModal() {
//   const modalRef = this.modalService.open(AddPetModalComponent);
//   modalRef.result.then((result: PetProfile) => {
//     if (result) {
//       // Check if petBirthdate is already a Date object, if not, parse it
//       if (typeof result.petBirthdate === 'string') {
//         result.petBirthdate = new Date(result.petBirthdate);
//       }
//
//       // Format the pet's birthday using DatePipe and assign the formatted string
//       result.petBirthdate = this.datePipe.transform(result.petBirthdate, 'yyyy-MM-dd');
//
//       // Push the formatted pet to the array
//       this.pets.push(result);
//
//       // Send POST request with the formatted pet
//       this.http.post('/api/pet-profile', result).subscribe(() => {
//         console.log('Pet added successfully.');
//         // No need for initializePetProfile() here, directly update pets array
//       });
//     }
//   });
// }

}
