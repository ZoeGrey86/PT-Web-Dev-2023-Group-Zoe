import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PetProfileService } from './pet-profile.service';
import { PetProfileUpdateService } from './pet-profile-update.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-delete-pet-modal',
  templateUrl: './delete-pet-modal.component.html',
  styleUrls: ['./delete-pet-modal.component.css']
})
export class DeletePetModalComponent {

  constructor(
      public activeModal: NgbActiveModal,
      private http: HttpClient,
//       private router: Router,
      private petProfileService: PetProfileService,
      private petProfileUpdateService: PetProfileUpdateService
    ) {}

  petIdToDelete: any = {};

  closeModal() {
    this.activeModal.dismiss();
  }

private reloadPage() {
  // Reload the current page
  window.location.reload();
}

  onDelete() {
    // Call the deletePet method from the service
    this.petProfileService.deleteByPetId(this.petIdToDelete).subscribe(
      () => {
        // Handle successful deletion
        this.petProfileUpdateService.triggerPetDeleted(this.petIdToDelete); // Trigger the event
        this.activeModal.close();
        this.reloadPage(); // Reload the page
      },
      (error) => {
        // Handle error
        console.error('Error deleting pet:', error);
        // Optionally, you can show an error message to the user
      }
    );
  }


}
