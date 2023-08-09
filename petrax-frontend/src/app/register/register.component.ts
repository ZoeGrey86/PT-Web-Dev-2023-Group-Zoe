import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   firstName: string = '';
   lastName: string = '';
   contactEmail: string = '';
   pwHash: string = '';
   pwHashConfirm: string = '';
   address: string = '';
   errorMessage: string = '';  // For displaying errors to the user
   showModal: boolean = false;  // This controls the visibility of the modal.


  constructor(private registerService: RegisterService, private router: Router) { }
 // Injecting the RegisterService

   ngOnInit() { }

   onSubmit() {
      if (this.pwHash !== this.pwHashConfirm) {
         this.errorMessage = "Passwords do not match!";
         return;
      }

     this.registerService.registerUser({
         firstName: this.firstName,
         lastName: this.lastName,
         contactEmail: this.contactEmail,
         pwHash: this.pwHash,
         address: this.address
    }).subscribe(response => {
      console.log("Registration successful", response);
      // Display the modal instead of directly navigating.
         this.showModal = true;
    });
  }

    // New method to navigate to login when the button in the modal is clicked.
     navigateToLogin() {
        this.router.navigate(['/login']);
     }
  }
