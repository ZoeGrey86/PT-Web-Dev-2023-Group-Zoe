import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// provides the Angular implementation of the Bootstrap Modal component.
import { HttpClient } from '@angular/common/http';
//provides an HTTP client for making requests to the server.
import { AddPetModalComponent } from './add-pet-modal.component';
//allows users to add new pets to the profile
import { PetDetailModalComponent } from './pet-detail-modal.component';
//displays the details of a pet
import { DeletePetModalComponent } from './delete-pet-modal.component';
//allows users to delete pets from profile
import { PetProfile } from './pet-profile.model';
import { PetProfileService } from './pet-profile.service';
import { PetProfileUpdateService } from './pet-profile-update.service';
import { ActivatedRoute, Router } from '@angular/router';
//refreshes page after remove pet clicked



@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})

export class PetProfileComponent implements OnInit {
  pets: PetProfile[] = [];

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private petProfileService: PetProfileService,
    private petProfileUpdateService: PetProfileUpdateService
  ) {}


  ngOnInit() {
    this.initializePetProfile();
    this.fetchPetsFromServer();
  }

  fetchPetsFromServer() {
    this.http.get<PetProfile[]>('http://localhost:8080/api/petProfile', { params: { page: '0', size: '3' } })
      .subscribe((data) => {
        this.pets = [...this.pets, ...data];
          this.initializePetProfile();
      },
      (error) => {
           console.error('Error fetching pets', error);
        }
     );
  }

initializePetProfile() {
  // Loop through each pet in the pets array
  this.pets = this.pets.map(pet => ({
    ...pet
  }));
}



  handlePetClick(petInfo) {
    const petId = petInfo.pet.petId;
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
    modalRef.componentInstance.petId = petId;
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

 isPetPresent(petId: number): boolean {
    return this.pets.some((pet) => pet.petId === petId);
  }

openAddPetModal() {
  const modalRef = this.modalService.open(AddPetModalComponent);
  modalRef.result.then((result) => {
    if (result) {
      this.petProfileService.addPet(result).subscribe(response => {
                 console.log('Pet added to database:', response);
                 this.pets.push(result);
                 this.initializePetProfile();
               }, error => {
                 console.error('Error adding pet:', error);
               });
              }
            });
          }



//THIS REMOVES FROM DB, NOT FROM PROFILE
  openDeletePetModal(petId: number) {
      const modalRef = this.modalService.open(DeletePetModalComponent);
      modalRef.componentInstance.petIdToDelete = petId; // Pass the petId to the modal
      modalRef.result.then((result) => {
        if (result === 'delete') {
          // Call a service method to delete the pet
          this.petProfileService.deleteByPetId(petId).subscribe(
            (response) => {
              console.log('Pet deleted from database:', response);
              // Update the local list of pets (assuming you have a pets array)
              this.pets = this.pets.filter((pet) => pet.petId !== petId);
           },
            (error) => {
              console.error('Error deleting pet:', error);
            }
          );
        }
      });
    }



}

