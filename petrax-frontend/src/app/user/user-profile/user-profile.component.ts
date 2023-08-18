import { Component, OnInit } from '@angular/core';
import { CareProfessionalComponent } from 'src/app/care-professional/care-professional.component';
import { CareProfessionalService } from 'src/app/care-professional/care-professional.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CareProfessional } from 'src/app/care-professional/care-professional';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  professionals: CareProfessional[];

  constructor(private router: Router, private careProfessionalService: CareProfessionalService) { }

  ngOnInit(): void {
    this.getCareProfessionals();
  }

  private getCareProfessionals(){
    this.careProfessionalService.getProfessionalsList().subscribe(data => {
      this.professionals = data;
    });
  }

  navigateToAddProfessional(){
    this.router.navigate(['/add-care-professional']);}

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

