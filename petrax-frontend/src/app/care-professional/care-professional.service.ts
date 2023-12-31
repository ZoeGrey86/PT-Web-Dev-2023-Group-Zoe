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
  getProfessionalById(id: number): Observable<CareProfessional>{
    return this.httpClient.get<CareProfessional>(`${this.baseURL}/${id}`);
  }
  updateProfessional(id: number, professional: CareProfessional): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, professional);
  }

  deleteProfessional(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
