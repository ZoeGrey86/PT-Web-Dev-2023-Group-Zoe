import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

declare let google: any;  
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   firstName: string = '';
   lastName: string = '';
   contactEmail: string = '';
   password: string = '';
   verifyPassword: string = '';
   address: string = '';
   errorMessage: string = '';  // For displaying errors to the user
   showModal: boolean = false;  // This controls the visibility of the modal.


  constructor(private registerService: RegisterService, private router: Router) { }
 // Injecting the RegisterService

   ngOnInit() { }

   ngAfterViewInit() {
      // Load Google Places API for address autocomplete
      const script = document.createElement('script');
      script.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtSNbZXisyon_iyVc0zzReieqXRO0mXto&libraries=places";
      document.head.appendChild(script);
  
      // Initialize address autocomplete after API is loaded
      script.onload = () => {
        this.initAutocomplete();
      };
    }

    initAutocomplete() {
      const autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('address') as HTMLInputElement,
        { types: ['address'] }
      );
  
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        // Process the selected place data if needed
      });
    }

   onSubmit() {
      if (this.password !== this.verifyPassword) {
         this.errorMessage = "Passwords do not match!";
         return;
      }

     this.registerService.registerUser({
         firstName: this.firstName,
         lastName: this.lastName,
         contactEmail: this.contactEmail,
         password: this.password,
         verifyPassword: this.verifyPassword,
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
