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

constructor(private authService: AuthService, private loginService: LoginService, private router: Router) { }
 // Injecting the LoginService

    ngOnInit() { }

  onSubmit() {
          this.authService.login(this.email, this.password).subscribe(
            (response) => {
              // Authentication successful
              this.router.navigate(['/dashboard']); // Redirect to the dashboard or another authenticated page
            },
            (error) => {
              // Authentication failed, handle error
              console.error('Authentication failed:', error);
            }
  this.loginService.loginUser({
      email: this.email,
      pwHash: this.pwHash,

  }).subscribe(response => {
        console.log("Login successful", response);
        // Display the modal instead of directly navigating.
           this.showModal = true;
      });
    }

      // New method to navigate to home when the button in the modal is clicked.
       navigateToHome() {
          this.router.navigate(['/home']);
       }
    }