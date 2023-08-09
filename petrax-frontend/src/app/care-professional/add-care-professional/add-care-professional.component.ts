import { Component, OnInit } from '@angular/core';
import { CareProfessional } from '../care-professional';
import { CareProfessionalService } from '../care-professional.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-care-professional',
  templateUrl: './add-care-professional.component.html',
  styleUrls: ['./add-care-professional.component.css']
})
export class AddCareProfessionalComponent implements OnInit {

  careProfessional: CareProfessional = new CareProfessional();

  constructor(private careProfessionalService: CareProfessionalService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  saveCareProfessional(){
    this.careProfessionalService.createCareProfessional(this.careProfessional).subscribe( data =>{
      console.log(data);
      this.goToProfessionalList();
    },
    error => console.log(error))
  }

  goToProfessionalList(){
    this.router.navigate(['/care-professional']);
  }

  onSubmit(){
    console.log(this.careProfessional);
    this.saveCareProfessional();

  }

}
