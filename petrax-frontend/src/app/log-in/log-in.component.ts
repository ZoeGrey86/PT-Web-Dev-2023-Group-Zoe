import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  email: string = '';
  pwHash: string = '';
  errorMessage: string = ''; // For displaying errors to the user
  showModal: boolean = false; // This controls the visibility of the modal.

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    const user = {
      email: this.email,
      pwHash: this.pwHash,
    };

    this.loginService.loginUser(user).subscribe(
      (response) => {
        // Authentication successful
        console.log("Login successful", response);
        // Display the modal instead of directly navigating.
        this.showModal = true;
      },
      (error) => {
        // Authentication failed, handle error
        console.log("user.email");
        console.error('Username or Password incorrect', error);
        this.errorMessage = 'Username or password incorrect';
      }
    );
  }

  // Navigate to home route
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
