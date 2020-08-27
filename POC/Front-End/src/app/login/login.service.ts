import { TokenService } from './token.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from "./usuario";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class LoginService {

  private serverAPI: string = `${environment.API}/auth`;
  public mostrarMenuEmitter = new Subject<boolean>();
  private authToken: string;

  constructor(private router: Router,
              private http: HttpClient,
              private tokenService: TokenService) {
              }

   authenticate(usuario: Usuario) {
     this.http.post(this.serverAPI, usuario)
     .subscribe((sucess:any) =>{
                console.log(sucess)
                this.authToken = sucess.token;
                this.tokenService.setToken(this.authToken);
                this.mostrarMenuEmitter.next(true);
                this.router.navigate(["/home"]);
                },
                error=>{
                  this.tokenService.removeToken();
                  console.log(error)
                  this.mostrarMenuEmitter.next(false);
                  alert('Credenciais Inválidas');
                });
  }

  usuarioNaoAutenticado(valor: boolean){
    this.mostrarMenuEmitter.next(!valor);
  }

  usuarioEstaAutenticado(): boolean{
    const ExistsToken = this.tokenService.hasToken();

    if(ExistsToken){
      this.mostrarMenuEmitter.next(true);
      return true;
    }else{
      return false;
    }
  }

}
