import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  onHomePage: boolean;
  isMenuOpen=false;

  toggleMenu() {
    this.isMenuOpen=!this.isMenuOpen;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {
 this.router.events.pipe(
     filter(event => event instanceof NavigationEnd)
   ).subscribe((event: NavigationEnd) => {
     this.onHomePage = event.urlAfterRedirects === '/home';
   });
 }
 }
