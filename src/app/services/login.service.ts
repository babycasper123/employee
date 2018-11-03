import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  login(loginCred){
         this.httpClient.post('http://localhost:3000/api/Users/login',{
           'username': loginCred.username,
           'password' : loginCred.password
         }).subscribe((res)=>{
           console.log(JSON.stringify(res))
         })
  }


  registerUser(formValues){
    this.httpClient.post('http://localhost:3000/api/Users',{
      'username': formValues.username,
      'email':formValues.email,
      'password' : formValues.password
    }).subscribe((res)=>{
      console.log(JSON.stringify(res));
    })
  }
  
}
