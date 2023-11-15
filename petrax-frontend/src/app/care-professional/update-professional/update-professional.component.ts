import { Component, OnInit } from '@angular/core';
import { CareProfessional } from '../care-professional';
import { CareProfessionalService } from '../care-professional.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-professional',
  templateUrl: './update-professional.component.html',
  styleUrls: ['./update-professional.component.css']
})
export class UpdateProfessionalComponent implements OnInit {
  careProfessional:CareProfessional;

  id:number;
  professional: CareProfessional = new CareProfessional();
  constructor(private careProfessionalService: CareProfessionalService,
     private route: ActivatedRoute, 
     private router: Router) 
     { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.careProfessionalService.getProfessionalById(this.id).subscribe(data => {
      this.careProfessional = data;
    }, error=>console.log(error));
  }
  goToCareProf(){
    this.router.navigate(['/care-professional']);
  }

  onSubmit(): void {
    if(this.careProfessional) {
      this.careProfessionalService.updateProfessional(this.id, this.careProfessional).subscribe(data => {
        console.log(data);
        this.careProfessional = new CareProfessional();
        this.goToCareProf();
      }, error=>console.log(error));
    }
    
  }

}
