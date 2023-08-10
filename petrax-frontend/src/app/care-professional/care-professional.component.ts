import { Component, OnInit } from '@angular/core';
import { CareProfessional } from './care-professional';
import { CareProfessionalService } from './care-professional.service';

@Component({
  selector: 'app-care-professional',
  templateUrl: './care-professional.component.html',
  styleUrls: ['./care-professional.component.css']
})
export class CareProfessionalComponent implements OnInit {

  professionals: CareProfessional[];

  constructor(private careProfessionalService: CareProfessionalService) { }

  ngOnInit(): void {
    this.getCareProfessionals();
  }

  private getCareProfessionals(){
    this.careProfessionalService.getProfessionalsList().subscribe(data => {
      this.professionals = data;
    });
  }

}
