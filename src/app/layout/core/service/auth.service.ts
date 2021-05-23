import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    // return this.http.post(`/auth`, user, {responseType: 'text' as 'json'});
    return this.http.post(`/auth?username=${username}&password=${password}`,
      {username, password}, {observe: 'response'});
  }

  getAccountByUsername(username: string): Observable<any> {
    return this.http.get(`/users/read/username/${username}`);
  }
}
