import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  cadastro = []

  constructor() { }

  cadastroRepublica(n){
    this.cadastro.push(n) 
    console.log(this.cadastro)
  }

}

