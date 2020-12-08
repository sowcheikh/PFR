import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL = 'http://localhost:8000/';

  constructor(private http: HttpClient) { 

    
  }

  login (user) {
  return this.http.post<User>(this.BASE_URL+'api/login', user)
  }
}
