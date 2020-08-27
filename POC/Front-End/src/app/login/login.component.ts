import { TokenService } from './token.service';
import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  preserveWhitespaces: true
})
export class LoginComponent implements OnInit {

   isError:boolean;
   usuario: Usuario;
   formulario: FormGroup;

   constructor(
     private loginService: LoginService,
     private tokenService: TokenService
     ) { }

  ngOnInit() {
    this.tokenService.removeToken();
    this.loginService.usuarioNaoAutenticado(true);
    this.formulario = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null,[Validators.required]),
    })
    
  }

  onSubmit(){
    console.log(this.formulario.value)
    this.loginService.authenticate(this.formulario.value)
  }
}
