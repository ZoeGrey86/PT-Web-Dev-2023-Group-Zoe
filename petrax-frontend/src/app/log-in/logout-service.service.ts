import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutServiceService {

  constructor(private router: Router) { }

  logout(): void {
    console.log('sessionToken');
    localStorage.removeItem('sessionToken');
    this.router.navigate(['/login']);
  }
}
