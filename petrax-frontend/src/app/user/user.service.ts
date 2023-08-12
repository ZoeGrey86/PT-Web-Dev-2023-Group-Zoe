import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/v1/users";

  constructor(private httpClient: HttpClient) { }

  // Error handling
  private handleError(error: any) {
    console.error('Server error:', error);
    if (error.error instanceof ErrorEvent) {
       const errorMessage = `An error occurred: ${error.error.message}`;
       return throwError(errorMessage);
    }
    return throwError(error || 'Server error');
  }

  // Get all users
  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`)
               .pipe(catchError(this.handleError));
  }

  // Get single user by ID
  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`)
               .pipe(catchError(this.handleError));
  }

  // Create a new user
  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<User>(`${this.baseURL}`, user, { headers })
               .pipe(catchError(this.handleError));
  }

   // Update an existing user
    updateUser(id: number, user: User): Observable<User> {
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      return this.httpClient.put<User>(`${this.baseURL}/${id}`, user, { headers })
                 .pipe(catchError(this.handleError));
    }

    // Delete a user
    deleteUser(id: number): Observable<void> {
      return this.httpClient.delete<void>(`${this.baseURL}/${id}`)
                 .pipe(catchError(this.handleError));
    }
  }
