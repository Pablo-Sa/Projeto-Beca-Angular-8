import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = 'raycarlos';
  password = '123456';

  constructor(private router: Router) { }

  loginUser(e) {
    if(e.user == this.user && e.password == this.password){
      alert(`Logado com sucesso ${this.user}`);
      this.router.navigate(['/index']);
      }
      else{
        alert(`Dados invalidos`);
    }

  }
}
