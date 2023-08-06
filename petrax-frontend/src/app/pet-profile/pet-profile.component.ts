import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PetDetailModalComponent } from './pet-detail-modal/pet-detail-modal.component';
import { AddPetModalComponent } from './add-pet-modal/add-pet-modal.component';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
