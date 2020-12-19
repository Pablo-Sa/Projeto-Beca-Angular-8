import { Injectable } from '@angular/core';
import { Usuario } from '../usuario';
import { BoasvindasComponent } from '../boasvindas/boasvindas.component';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private autenticacaoUsuario: boolean = false;

  constructor(private router: Router) { }
    fazerlogin(usuario: Usuario){

      if (usuario.nome === 'adm' && usuario.senha === 'lorenaadm'){
        this.autenticacaoUsuario = true;
        this.router.navigate(['/boasvindas']);

      }else{
        this.autenticacaoUsuario = false;
        console.log('erroooooo');
      }

    }





}
