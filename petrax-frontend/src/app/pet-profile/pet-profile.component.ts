import { Component, OnInit } from '@angular/core';
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
import { PetProfile, PetType } from './pet-profile.model';
import { PetProfileService } from './pet-profile.service';
import { LoginService } from '../log-in/login.service';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})

export class PetProfileComponent implements OnInit {
  pets: PetProfile[] = [];
  PetType = PetType;
  userId: number | null = null; // Declare the userId property

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private petProfileService: PetProfileService,
    private loginService: LoginService
  ) {}

ngOnInit() {
  this.loginService.getCurrentUser().subscribe(user => {
      this.userId = user ? user.id : null;

      // Check if user is logged in
      if (!this.userId) {
          console.error("User is not logged in!");
          // TODO: Maybe navigate back to login or handle this scenario appropriately
          return;
      }

      this.fetchPetsFromServer();
  });
}

// Method to use the mapped value
determineProfilePictureEmoji(petType: PetType): string {
  switch (petType) {
    case PetType.CAT:
      console.log('Selected pet type: CAT');
      return "🐈";
    case PetType.DOG:
      console.log('Selected pet type: DOG');
      return "🐕";
    case PetType.BIRD:
      console.log('Selected pet type: BIRD');
      return "🦜";
    case PetType.FISH:
      console.log('Selected pet type: FISH');
      return "🐠";
    case PetType.REPTILE:
      console.log('Selected pet type: REPTILE');
      return "🐍";
    case PetType.OTHER:
      console.log('Selected pet type: OTHER');
      return "❤️";
    default:
      console.log('Selected pet type: Unknown');
      return "❓"; // Default emoji
  }
}

fetchPetsFromServer() {
  this.http.get<PetProfile[]>('http://localhost:8080/api/petProfile',
      { params: { page: '0', size: '3', userId: this.userId } })
  .subscribe(
    (data) => {
      // Update the pets array with the fetched data
      this.pets = [...this.pets, ...data];
    },
    (error) => {
      console.error('Error fetching pets', error);
    }
  );
}

handlePetClick(petInfo) {
  this.openPetDetailModal(petInfo.pet);
}


 isPetPresent(petId: number): boolean {
    return this.pets.some((pet) => pet.petId === petId);
  }

openAddPetModal() {
  const modalRef = this.modalService.open(AddPetModalComponent);
  modalRef.result.then((result) => {
    if (result) {
      this.petProfileService.addPet(result).subscribe(
        (response) => {
          console.log('Pet added to database:', response);
          this.pets.push(result); // Add the new pet to the local array
        },
        (error) => {
          console.error('Error adding pet:', error);
        }
      );
    }
  });
}

openPetDetailModal(pet: PetProfile) {
  const modalRef = this.modalService.open(PetDetailModalComponent);
  modalRef.componentInstance.pet = pet;
}


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
