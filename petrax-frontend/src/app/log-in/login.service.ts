import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable } from 'rxjs';

import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API_URL = 'http://localhost:8080/api/v1/users/authentication';
  private readonly USER_KEY = 'currentUser';

  constructor(private http: HttpClient) {}

  loginUser(user: any): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/login`, user).pipe(
      tap((response: User) => {
        if (response && response.id) {
          localStorage.setItem(this.USER_KEY, JSON.stringify(response));
        }
      })
    );
  }

  getCurrentUser(): Observable<User | null> {
    const userString = localStorage.getItem(this.USER_KEY);
    if (userString) {
      return of(JSON.parse(userString));
    }
    return of(null);
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  logout(): Observable<string> {
    localStorage.removeItem(this.USER_KEY);
    return this.http.get(`${this.API_URL}/logout`, {responseType: 'text'});
  }
}
