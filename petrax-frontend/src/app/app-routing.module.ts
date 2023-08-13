// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { LogInComponent } from './log-in/log-in.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { PetProfileComponent } from './pet-profile/pet-profile.component';
import { RegisterComponent } from './register/register.component';
import { CareProfessionalComponent } from './care-professional/care-professional.component';
import { AddCareProfessionalComponent } from './care-professional/add-care-professional/add-care-professional.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { UpdateProfessionalComponent } from './care-professional/update-professional/update-professional.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to home
  { path: 'home', component: HomeComponent }, // Route for HomeComponent
  { path: 'calendar', component: CalendarComponent }, // Route for CalendarComponent
  { path: 'login', component: LogInComponent }, // Route for LogInComponent
  { path: 'user-list', component: UserListComponent }, //
  { path: 'faq', component: FaqComponent}, //Route for FAQ
  { path: 'pet-profile', component: PetProfileComponent}, //Route for PetProfileComponent
  { path: 'register', component: RegisterComponent}, //Route for RegisterComponent
  { path: 'users', component: UserListComponent }, // Route for CalendarComponent
  {path: 'faq', component: FaqComponent}, //Route for FAQ
  {path: 'pet-profile', component: PetProfileComponent}, //Route for PetProfileComponent
  {path: 'care-professional', component: CareProfessionalComponent},
  {path: 'add-care-professional', component:AddCareProfessionalComponent},
  {path: 'welcome', component:LandingPageComponent},
  {path: 'add-care-professional', component:AddCareProfessionalComponent},
  {path: 'update-care-professional/:id', component:UpdateProfessionalComponent}


  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
