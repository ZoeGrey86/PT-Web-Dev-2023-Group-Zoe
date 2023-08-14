import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  contactEmail: string = '';
  password: string = '';
  errorMessage: string = ''; // For displaying errors to the user
  showModal: boolean = false; // This controls the visibility of the modal.

  constructor(private loginService: LoginService, private router: Router) {}

    ngOnInit() { // Implement ngOnInit lifecycle hook
        const sessionToken = this.getStoredSessionToken();

     if (sessionToken) {
      // A session token is present, user is logged in
      // You can proceed to fetch user data or display authorized content
     } else {
      // No session token, user is not logged in
      // You might redirect to a login page or show non-logged-in content
    }
  }

  onSubmit() {
    const user = {
      contactEmail: this.contactEmail,
      password: this.password,
    };

    console.log("36 - is this working?")

    this.loginService.loginUser(user).subscribe(
      (response) => {
        // Authentication successful
        console.log("41 - is this working?")
        console.log("Login successful", response);
        // Display the modal instead of directly navigating.
        this.showModal = true;
      },
      (error) => {
        // Authentication failed, handle error
        console.log("48 - is this working?")
        console.error('Username or Password incorrect', error);
        this.errorMessage = 'Username or password incorrect';
      }
    );
  }

  // Navigate to home route
  navigateToHome() {
    this.router.navigate(['/calendar']);
  }
   private getStoredSessionToken(): string | null {
     const sessionCookie = document.cookie
         .split('; ')
         .find(row => row.startsWith('sessionToken='));

       if (sessionCookie) {
         return sessionCookie.split('=')[1];
       } else {
      return null; // Return the actual session token if available
     }
    }
}