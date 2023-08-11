import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PetProfileService } from './pet-profile.service';

@Component({
  selector: 'app-delete-pet-modal',
  templateUrl: './delete-pet-modal.component.html',
  styleUrls: ['./delete-pet-modal.component.css']
})
export class DeletePetModalComponent {
  constructor(
    public activeModal: NgbActiveModal,
    private petProfileService: PetProfileService
  ) {}

  petIdToDelete: any = {};

  closeModal() {
    this.activeModal.dismiss();
  }

  onDelete() {
    // Call the deletePet method from the service
    this.petProfileService.deletePet(this.petIdToDelete).subscribe(
      () => {
        // Handle successful deletion
        this.activeModal.close();
      },
      (error) => {
        // Handle error
        console.error('Error deleting pet:', error);
        // Optionally, you can show an error message to the user
      }
    );
  }
}
