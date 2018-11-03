import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private loginservice:LoginService) { 

  }

  ngOnInit() {

    this.registerForm = new FormGroup({
      'username' : new FormControl(null),
      'email' : new FormControl(null),
      'password' : new FormControl(null)
    })
  }

  register(){
    this.loginservice.registerUser(this.registerForm.value);
  }

}
