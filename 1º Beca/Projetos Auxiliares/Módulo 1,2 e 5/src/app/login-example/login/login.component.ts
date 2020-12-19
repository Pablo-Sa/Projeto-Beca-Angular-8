import { LoginService } from './../shared/login.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/exemplo-data-binding/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: Usuario;

  constructor(private loginService: LoginService) {
    this.login = new Usuario();
   }

  ngOnInit() {
  }

  logar(){
    this.loginService.login(this.login);
  }

}
