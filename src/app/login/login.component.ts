import { FormGroup } from '@angular/forms';
import { User } from './../user/user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { injectMocks } from 'data-mocks';
import { Scenarios } from 'data-mocks/dist/types';
import { Router } from '@angular/router';

const scenarios: Scenarios = {
  default: [
    {
      url: /login/,
      method: 'GET',
      response: { some: 'good response' },
      responseCode: 200
    },
    {
      url: /some-other-endpoint/,
      method: 'GET',
      response: { another: 'response' },
      responseCode: 200,
      delay: 1000
    },
    {
      url: /endpoint-with-headers/,
      method: 'GET',
      response: { same: 'response' },
      responseHeaders: { token: 'mock-token' },
      responseCode: 200
    }
  ]
};

injectMocks(scenarios, 'default', {allowXHRPassthrough: true, allowFetchPassthrough: true});

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: any;
  formLogin: FormGroup;
  user: User[];
  loginUserData = {
    email: '',
    password: '',
    profile: 'admin'
  };
   users: User[];

  constructor(private auth: AuthService, 
   private router: Router) {
      
  }

loginUser(){
  this.auth.login(this.loginUserData).subscribe(
    res=> {
      if ( res =='ROLE_ADMIN') {
        console.log('admin');
        
      } else{
        console.log('non');
      }
     
      
    },
    
    err=> console.log(err),
    ()=> {
      
     // this.router.navigate(['/admin']);
    }
    
    
  )
}
getAllUsers() {
this.auth.getUser().subscribe(
  res=> console.log(res),
  err=> console.log(err),
)
}
  ngOnInit(): void {
  }

}
