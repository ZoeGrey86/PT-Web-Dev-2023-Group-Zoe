import { Component, OnInit } from '@angular/core';
import { LoginService } from '../log-in/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 onHomePage: boolean;
  isMenuOpen=false;

  toggleMenu() {
    this.isMenuOpen=!this.isMenuOpen;}

  constructor(private loginService: LoginService) { } // inject the service here

  ngOnInit(): void {
  }

  onLogout(): void {
    this.loginService.logout().subscribe(
      response => {
        console.log('Logout successful');
        // Here you can navigate the user to a different page if needed
      },
      error => {
        console.error('Error during logout:', error);
      }
    );
  }

}
