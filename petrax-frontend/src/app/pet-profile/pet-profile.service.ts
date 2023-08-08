import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PetProfile } from './pet-profile.model';


@Injectable({
  providedIn: 'root'
})

export class PetProfileService {
  private apiUrl = '/api/petProfile';

    constructor(private http: HttpClient) {}

getAllPets(): Observable<PetProfile[]> {
    return this.http.get<PetProfile[]>(this.apiUrl);
  }
  addPet(pet: PetProfile): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, pet);
  }

}

