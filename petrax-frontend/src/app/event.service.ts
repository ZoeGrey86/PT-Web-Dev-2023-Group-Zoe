import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from "./event";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseURL= "http://localhost:8080/events"

  constructor(private httpClient: HttpClient) { }
  //controller methods go here 

}
