import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    //implementing the logic for handling form submission.
    console.log('Email:', this.email);
    console.log('Password:', this.password);

  }

}
