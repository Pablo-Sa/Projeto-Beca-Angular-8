import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = 'admin';
  password = 'admin';

  constructor(private router:Router) { }

  userLogin(e){
    if(e.user == this.user && e.password == this.password){
    alert (`Bem vindo ${this.user}`);
    this.router.navigate(["/index"])
    }
    else {alert ('Não encontrado.')}
  }

}
