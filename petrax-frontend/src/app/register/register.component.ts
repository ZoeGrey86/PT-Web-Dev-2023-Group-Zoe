import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    constructor() { }

   ngOnInit() { }

   firstName: string = '';
   lastName: string = '';
   contactEmail: string = '';
   pwHash: string = '';
   address: string = '';

     ngAfterViewInit() {
        this.addressInput = document.getElementById('address') as HTMLInputElement;
        this.initAutocomplete();

   onSubmit() {
     //implementing the logic for handling form submission.
     console.log('First Name:', this.firstName);
     console.log('Last Name:', this.lastName);
     console.log('Email:', this.contactEmail);
     console.log('Password:', this.pwHash);
     console.log('Address:', this.address);
   }

  initAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addressInput);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        // You can access various place details from the 'place' object
        console.log('Selected Place:', place.name, place.formatted_address);
      }
    });
  }

}
