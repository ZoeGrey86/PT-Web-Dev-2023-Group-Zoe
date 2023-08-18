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

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  initializePetProfile() {
    //    this.petName.pets = this.pets
       }

  pets: any[] = [
    ];
    
    events: any[] = [
    ];


  constructor(private modalService:NgbModal,
     private http:HttpClient, 
     private petProfileService: PetProfileService,
     private router:Router,) { }

  ngOnInit(): void {
    this.fetchEventsFromServer();
    this.fetchPetsFromServer();
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
  navigateToProfile() {
    this.router.navigate(['my-profile']);
  }
  navigateToProfessionals() {
    this.router.navigate(['care-professional']);
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

}
