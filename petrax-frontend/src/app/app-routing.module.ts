// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { AddPetSuccessComponent } from './add-pet/add-pet-success.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to home
  { path: 'home', component: HomeComponent }, // Route for HomeComponent
  { path: 'calendar', component: CalendarComponent }, // Route for CalendarComponent
  { path: 'users', component: UserListComponent }, // Route for CalendarComponent
  {path: 'faq', component: FaqComponent}, //Route for FAQ
  {path: 'add-pet', component: AddPetComponent}, //Route for AddPetComponent
  {path: 'add-pet-success', component: AddPetSuccessComponent}, //Route for nested AddPetSuccessComponent


  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
