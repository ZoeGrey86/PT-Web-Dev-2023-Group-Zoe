import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CareProfessional } from './care-professional';

@Injectable({
  providedIn: 'root'
})
export class CareProfessionalService {

  private baseURL = "http://localhost:8080/professionals";

  constructor(private httpClient: HttpClient) { }

  getProfessionalsList(): Observable<CareProfessional[]> {
    return this.httpClient.get<CareProfessional[]>(`${this.baseURL}/list`);
  }

  createCareProfessional (careProfessional: CareProfessional): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/add`, careProfessional)
  }
}
