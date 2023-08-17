import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';


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
  userId: number | null = null; // this will store the user's ID after successful login

  constructor(private loginService: LoginService, private router: Router, private cdr: ChangeDetectorRef) {}

    ngOnInit() {
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

    this.loginService.loginUser(user).pipe(
      switchMap(() => {
        return this.loginService.getCurrentUser().pipe(
          map(user => user.id)
        );
      })
    ).subscribe(
      (userIdResponse: number) => {
        this.userId = userIdResponse; // Store the user's ID
        this.showModal = true;
        this.cdr.detectChanges();
      },
      (error) => {
        console.log("48 - is this working?");
        console.error('Username or Password incorrect', error);
        this.errorMessage = 'Username or password incorrect';
      }
    );
  }


  // Navigate to home route
  navigateToHome() {
    this.router.navigate(['/welcome']);
  }
   private getStoredSessionToken(): string | null {
     const sessionCookie = document.cookie
         .split('; ')
         .find(row => row.startsWith('sessionToken='));

      return sessionCookie ? sessionCookie.split('=')[1] : null;
    }
  }
