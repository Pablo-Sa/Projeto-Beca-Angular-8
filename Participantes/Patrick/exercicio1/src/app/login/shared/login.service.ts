import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './../models/usuario';

@Injectable({
  providedIn: 'root'
})


export class LoginService {

  constructor(private router: Router) {
    console.log('Login Service')
  }

  login(usuario: Usuario){
    if(usuario.name === 'Patrick' && usuario.password === '123') {
      this.router.navigate(["index"]);
      window.localStorage.setItem('userLogado', usuario.name);
    }
    else {
      alert('usuário ou senha inválida')
    }
  }

}
