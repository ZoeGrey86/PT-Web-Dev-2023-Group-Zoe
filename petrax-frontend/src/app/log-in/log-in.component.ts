import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  email: string = '';
  pwHash: string = '';

constructor() { }

  onSubmit() {
   // Here, you can send the email and pwHash to your backend for authentication
    console.log('Email:', this.email);
    console.log('Password:', this.pwHash);

   // Reset the form for next use or on success/failure
    this.email = '';
    this.pwHash = '';

  }

}
