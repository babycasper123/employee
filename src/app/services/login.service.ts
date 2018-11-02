import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  login(){
         this.httpClient.get('http://localhost:3000/api/empDetails').subscribe((res)=>{
         console.log(res);
    });

  }
  
}
