// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { AddNewPetSuccessComponent } from './add-new-pet-success/add-new-pet-success.component';
import { AddNewPetComponent } from './add-new-pet/add-new-pet.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to home
  { path: 'home', component: HomeComponent }, // Route for HomeComponent
  { path: 'calendar', component: CalendarComponent }, // Route for CalendarComponent
  { path: 'users', component: UserListComponent }, // Route for CalendarComponent
  {path: 'faq', component: FaqComponent}, //Route for FAQ
  {path: 'pet-profile', component: PetProfileComponent}, //Route for PetProfileComponent
  { path: 'addNewPetSuccess', component: AddNewPetSuccessComponent } //Route for AddNewPetSuccessComponent
  { path: 'addNewPet', component: AddNewPetComponent } //Route for AddNewPetComponent


  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
