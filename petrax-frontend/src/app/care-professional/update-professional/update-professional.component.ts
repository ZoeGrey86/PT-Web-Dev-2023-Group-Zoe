import { Component, OnInit } from '@angular/core';
import { CareProfessional } from '../care-professional';
import { CareProfessionalService } from '../care-professional.service';
import { ActivatedRoute } from '@angular/router';


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
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.careProfessionalService.getProfessionalById(this.id).subscribe(data => {
      this.careProfessional = data;
    }, error=>console.log(error));
  }

  onSubmit(): void {}

}
