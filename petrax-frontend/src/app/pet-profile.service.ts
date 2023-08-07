import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { PetProfile } from './pet-profile';

@Injectable({
  providedIn: 'root'
})
export class PetProfileService {

  private baseURL= "http://localhost:8080/api/v1/PetProfile"

  constructor(private httpClient:HttpClient) { }

  getPetProfileList(): Observable<PetProfile[]>{
    return this.httpClient.get<PetProfile[]>(`${this.baseURL}`);
  }
}
