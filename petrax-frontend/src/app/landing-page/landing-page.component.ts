import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPetModalComponent } from '../pet-profile/add-pet-modal.component';
import { PetDetailModalComponent } from '../pet-profile/pet-detail-modal.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PetProfileService } from '../pet-profile/pet-profile.service';
import { CalendarComponent } from '../calendar/calendar.component';
import { CalendarService } from '../calendar/calendar.service';
import { PetProfile } from '../pet-profile/pet-profile.model';
import { LoginService } from '../log-in/login.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

   userId: number;
   pets: any[] = [];
   events: any[] = [];
   userFirstName: string = ''; // Added this line to store the logged-in user's first name

  constructor(private modalService:NgbModal,
     private http:HttpClient,
     private petProfileService: PetProfileService,
     private router:Router,
     private loginService: LoginService) { }

  ngOnInit(): void {
    this.fetchEventsFromServer();
    this.fetchPetsFromServer();

    // Get the logged-in user's first name
    this.loginService.getCurrentUser().subscribe(
      (currentUser) => {
        if (currentUser) {
          this.userFirstName = currentUser.firstName;
          this.userId = currentUser.id;
        }
      },
      (error) => {
        console.error('Error fetching current user:', error);
      }
    );
  }

  openPetDetailModal(pet: PetProfile) {
    const modalRef = this.modalService.open(PetDetailModalComponent);
    modalRef.componentInstance.petName = pet.petName;
    modalRef.componentInstance.petType = pet.petType;
    modalRef.componentInstance.petBreed = pet.petBreed;
    modalRef.componentInstance.petAge = pet.petAge;
    modalRef.componentInstance.petWeight = pet.petWeight;
    modalRef.componentInstance.petBirthdate = pet.petBirthdate;
    modalRef.componentInstance.petMedication = pet.petMedication;
    modalRef.componentInstance.petAllergy = pet.petAllergy;
    modalRef.componentInstance.petMicrochip = pet.petMicrochip;
    modalRef.componentInstance.petDiagnoses = pet.petDiagnoses;
  }

  fetchPetsFromServer() {
    this.http.get<PetProfile[]>('http://localhost:8080/api/petProfile', { params: { page: '0', size: '3' } })
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

  fetchEventsFromServer() {
    this.http.get<any[]>('http://localhost:8080/api/events', { params: { page: '0', size: '3' } })
    .subscribe(
      (data) => {
        this.events = [...this.events, ...data];
      },
      (error) => {
        console.error('Error fetching events', error);
       }
    );
}

  navigateToCalendar() {
    this.router.navigate(['/calendar']);
  }

  openAddPetModal() {
    const modalRef = this.modalService.open(AddPetModalComponent);
    modalRef.result.then((result) => {
      if (result && this.userId) {
        this.petProfileService.addPet(result).subscribe(
          (response) => {
            console.log('Pet added to database:', response);
            this.pets.push(result); // Add the new pet to the local array
          },
          (error) => {
            console.error('Error adding pet:', error);
          }
             );
        } else if (!this.userId) {
          console.error('Failed to add pet because userId is not defined');
      }
    });
}
    isLoggedIn(): boolean {
        return this.loginService.isLoggedIn();
      }


      handleLogout(): void {
        this.loginService.logout();
        // You can redirect the user after logging out, for example:
        this.router.navigate(['/login']);  // Redirect to login page after logout
     }

}
