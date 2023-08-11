import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
