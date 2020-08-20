import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({providedIn:'root'})
export class LoginService {

  constructor(private router: Router) {
    console.log('Login Service')
  }

  login(usuario: Usuario){
    if(usuario.login === 'Pablo' && usuario.senha === '123'){
      console.log('Logado');
      this.router.navigate(["databinding"])
    }
    else{
      alert('Credências Inválidas')
    }


  }

}
