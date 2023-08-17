import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetProfile } from './pet-profile.model';
import { LoginService } from '../log-in/login.service';

@Injectable({
  providedIn: 'root'
})
export class PetProfileService {
  private apiUrl = '/api/petProfile';

  constructor(private http: HttpClient, private loginService: LoginService) {} // Injecting LoginService

  getAllPets(): Observable<PetProfile[]> {
    return this.http.get<PetProfile[]>(this.apiUrl);
  }

  addPet(petData: PetProfile): Observable<any> {
    return new Observable(observer => {
      this.loginService.getCurrentUser().subscribe(user => {
        if (user && user.id) {
          const userId = user.id;
          console.log('UserId:', userId);
          // Only after fetching userId, send the HTTP request.
          this.http.post<any>(`${this.apiUrl}?userId=${userId}`, petData)
            .subscribe(
              response => {
                observer.next(response); // Push the data out
                observer.complete();    // Complete the observable stream
              },
              error => observer.error(error) // Forward the error
            );
        } else {
          observer.error('User not logged in or no ID found.');
        }
      });
    });
  }

  deleteByPetId(petId: number): Observable<any> {
    const url = `${this.apiUrl}/${petId}`;
    return this.http.delete<any>(url);
  }
}
