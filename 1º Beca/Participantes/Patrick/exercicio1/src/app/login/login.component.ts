import { Component, OnInit } from '@angular/core';
import { LoginService } from './shared/login.service';
import { Usuario } from './models/usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: Usuario;

  constructor(private LoginService: LoginService) {
      this.login = new Usuario();

   }

  ngOnInit(): void {
  }

  logar(){
    this.LoginService.login(this.login);
  }

}
