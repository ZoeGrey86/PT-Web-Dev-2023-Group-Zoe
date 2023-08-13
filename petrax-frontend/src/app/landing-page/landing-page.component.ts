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
