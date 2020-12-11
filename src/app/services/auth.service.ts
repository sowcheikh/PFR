import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { Injectable } from '@angular/core';

import jwt_decode from "jwt-decode";

import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private BASE_URL = 'http://localhost:8000/';

  constructor(private http: HttpClient) { 

    
  }

  login (user) {
  return this.http.post<User>(`${environment.url}/api/login`, user)
  .pipe(map(currentUser =>{
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));

    return this.getRole();
    }
  }))
  }

  getUser (): Observable<any> {
    return this.http.get<User>(`${environment.url}/api/admin/users`)
    }

    isLogin() {
      if (localStorage.getItem('currentUser')) {
        return true;
      }
      return false;
    }
  
    getAuthorizationToken() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      //console.log(currentUser);
      
      
      return currentUser.token;
    }
    getRole()
    {
      const decoded = jwt_decode(this.getAuthorizationToken());
      //console.log(decoded);
      const role =decoded['roles'][0];
       // console.log(role);
      return role;
    } 
}
