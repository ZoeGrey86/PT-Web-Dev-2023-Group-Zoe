import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email: string = '';
  pwHash: string = '';
  errorMessage: string = '';  // For displaying errors to the user
  showModal: boolean = false;  // This controls the visibility of the modal.

constructor(private loginService: LoginService, private router: Router) { }
 // Injecting the LoginService

    ngOnInit() { }

  onSubmit() {
          this.loginService.loginUser(this.email, this.pwHash).subscribe(
            (response) => {
              // Authentication successful
              this.router.navigate(['/home']);
            },
            (error) => {
              // Authentication failed, handle error
              console.error('Username or Password incorrect', error);
            }
  this.loginService.loginUser({
      email: this.email,
      pwHash: this.pwHash,

  }).subscribe(response => {
        console.log("Login successful", response);
        // Display the modal instead of directly navigating.
           this.showModal = true;
      })
    }

      // New method to navigate to home when the button in the modal is clicked.
       navigateToHome() {
          this.router.navigate(['/home']);
       }
    }