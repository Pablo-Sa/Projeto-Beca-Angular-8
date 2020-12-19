import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn:'root'
})
export class AuthService {

  nome= "felipe"
  senha= "admin"
  private userAthenticate:boolean = false
  userAtivo= new EventEmitter<boolean>();
constructor(private router :Router,
  private snackbar:MatSnackBar) { }


Login(credentials:{user:string, password:string}){
  if(credentials.user != this.nome){
    this.userAthenticate = false
    this.snackbar.open("Usuário não reconhecido", 'x',{
      duration:2000,
      verticalPosition:'top'
    })
  }
  if(credentials.password != this.senha){
    this.userAthenticate = false
    this.snackbar.open("Senha Incorreta", 'x',{
      duration:2000,
      verticalPosition:'top'
    })
  }
  if(credentials.user== this.nome && credentials.password == this.senha){
    this.snackbar.open("Bem Vindo "+ this.nome, 'x',{
      duration:2000,
      verticalPosition:'top'
    })
    this.userAthenticate = true
    this.router.navigate(['/list'])
    this.userAtivo.emit(true)
  }
  }
}


