import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


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

  constructor(private loginService: LoginService, private router: Router, private cdr: ChangeDetectorRef) {}

    ngOnInit() { // Implement ngOnInit lifecycle hook
//         this.showModal = false; // force modal to show up to ensure the modal works
        const sessionToken = this.getStoredSessionToken();
        console.log(sessionToken);
     if (sessionToken) {
      console.log(sessionToken);
      // A session token is present, user is logged in
      // You can proceed to fetch user data or display authorized content
     } else {
      console.log("no session token");
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
      (response: any) => {
        // Authentication successful
        console.log("Login successful", response,)
       if (response && response.token) {
               const sessionToken = response.token;
               console.log("sessionToken", sessionToken);
               document.cookie = `sessionToken=${sessionToken}; path=/`;
               console.log(document.cookie);  // Store the token in a cookie
           }
           this.showModal = true;
           this.cdr.detectChanges(); // Manually trigger change detection
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
