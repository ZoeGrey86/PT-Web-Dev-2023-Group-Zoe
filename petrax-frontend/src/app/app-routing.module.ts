// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to home
  { path: 'home', component: HomeComponent }, // Route for HomeComponent
  { path: 'calendar', component: CalendarComponent }, // Route for CalendarComponent
  { path: 'login', component: LogInComponent }, // Route for LogInComponent
  { path: 'users', component: UserListComponent }, // Route for CalendarComponent
  {path: 'faq', component: FaqComponent}, //Route for FAQ
  {path: 'pet-profile', component: PetProfileComponent}, //Route for PetProfileComponent


  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
