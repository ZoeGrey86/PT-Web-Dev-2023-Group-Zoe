import { Component, OnInit } from '@angular/core';
import { CareProfessional } from './care-professional';
import { CareProfessionalService } from './care-professional.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-care-professional',
  templateUrl: './care-professional.component.html',
  styleUrls: ['./care-professional.component.css']
})
export class CareProfessionalComponent implements OnInit {

  professionals: CareProfessional[];

  constructor(private careProfessionalService: CareProfessionalService, private router: Router) { }

  ngOnInit(): void {
    this.getCareProfessionals();
  }

  private getCareProfessionals(){
    this.careProfessionalService.getProfessionalsList().subscribe(data => {
      this.professionals = data;
    });
  }

  updateProfessional(id: number){
    this.router.navigate(['update-care-professional', id]);
  }

  deleteProfessional(id: number) {
    this.careProfessionalService.deleteProfessional(id).subscribe( data => {
      console.log(data);
      this.getCareProfessionals();
    })
  }

}
