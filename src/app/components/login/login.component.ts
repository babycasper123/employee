import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm :FormGroup;

  constructor(private loginservice:LoginService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username' : new FormControl(null),
      'password' : new FormControl(null)
    });
  }

  submit(){
    //console.log(this.signupForm.value.username,this.signupForm.value.password);
    this.loginservice.login(this.loginForm.value);
  }

}
