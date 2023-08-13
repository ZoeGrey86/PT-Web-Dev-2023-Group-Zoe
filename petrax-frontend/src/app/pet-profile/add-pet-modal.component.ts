import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PetProfileService } from './pet-profile.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PetProfileUpdateService } from './pet-profile-update.service';

@Component({
  selector: 'app-add-pet-modal',
  templateUrl: './add-pet-modal.component.html',
  styleUrls: ['./add-pet-modal.component.css']
})
export class AddPetModalComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private petProfileService: PetProfileService,
    private http: HttpClient,
    private petProfileUpdateService: PetProfileUpdateService
  ) {}

  newPet: any = {
    // Object to store the new pet details
    petName: '',
    petType: '',
    petBreed: '',
    petAge: '',
    petWeight: '',
    petBirthdate: '',
    petMedication: '',
    petAllergy: '',
    petMicrochip: '',
    petDiagnoses: '',
  };

  closeModal() {
    this.activeModal.dismiss();
  }

  private reloadPage() {
    // Reload the current page
    window.location.reload();
  }

 onSubmit() {
   // Perform client-side validation to ensure required fields are not empty
   if (!this.isNewPetValid()) {
     console.error('Error: Invalid pet data');
     return;
   }

   console.log('Submitting pet:', this.newPet);

   // Call the addPet method from the service
   this.petProfileService.addPet(this.newPet).subscribe(
     (response) => {
       // Pet added successfully, you can handle the response here
       console.log('Pet added response:', response);
       this.petProfileUpdateService.triggerPetAdded(response.petId);
       this.activeModal.close();
       this.reloadPage();
     },
     (error) => {
       // Handle the error
       console.error('Error adding pet:', error);
     }
   );
 }

 // Helper function to check if the newPet object is valid
 isNewPetValid(): boolean {
   // Perform validation here based on your requirements
   // For example, check if required fields are not empty
   // and if numeric fields contain valid numbers
   return (
     this.newPet.petName.trim() !== '' &&
     this.newPet.petType !== '' &&
     this.newPet.petBreed.trim() !== '' &&
     // Add additional validation checks as needed
     // Return true if all checks pass, otherwise return false
   );
 }


}
