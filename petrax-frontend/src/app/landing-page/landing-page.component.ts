import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPetModalComponent } from '../pet-profile/add-pet-modal.component';
import { PetDetailModalComponent } from '../pet-profile/pet-detail-modal.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PetProfileService } from '../pet-profile/pet-profile.service';
import { CalendarComponent } from '../calendar/calendar.component';
import { CalendarService } from '../calendar/calendar.service';

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
    events: any[] = [
      {name: "vetappt"}
    ];


  constructor(private modalService:NgbModal,
     private http:HttpClient, 
     private petProfileService: PetProfileService,
     private router:Router,) { }

  ngOnInit(): void {
    this.fetchEventsFromServer();
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
