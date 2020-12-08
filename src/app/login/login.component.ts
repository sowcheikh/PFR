import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { injectMocks } from 'data-mocks';
import { HttpClient} from '@angular/common/http';
import { Scenarios } from 'data-mocks/dist/types';

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
  loginUserData = {
    email: '',
    password: '',
    profile: 'admin'
  };

  constructor(private auth: AuthService) {
      
  }

loginUser(){
  this.auth.login(this.loginUserData).subscribe(
    res=> console.log(res),
    err=> console.log(err)
    
    
  )
}
  ngOnInit(): void {
  }

}
