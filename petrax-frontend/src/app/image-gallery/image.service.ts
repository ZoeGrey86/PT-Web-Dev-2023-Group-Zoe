import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseUrl = 'http://localhost:8080/api/v1/images';

  constructor(private http: HttpClient) { }

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  deleteImage(imageId: number) {
    return this.http.delete(`${this.baseUrl}/${imageId}`);
  }
}
