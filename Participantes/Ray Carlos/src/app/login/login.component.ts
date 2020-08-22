import { LoginService } from './../shared/login.service';
import { User } from './user..model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: User = {
    user: '',
    password: '',
  }
  hide = true;
  constructor(private loginservice: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginservice.loginUser(this.userLogin);
  }
}
