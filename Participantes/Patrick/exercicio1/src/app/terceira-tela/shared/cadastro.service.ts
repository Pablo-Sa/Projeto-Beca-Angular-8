import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from '../models/aluno';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  aluno: Aluno[] = [];

  constructor(private router: Router) { }

  cadastrar(aluno: Aluno){
    this.aluno.push(aluno);
    console.log(aluno)
    this.router.navigate(["listagem"]);
  }

  listar() {
    console.log(this.aluno)
    return this.aluno;
  }
}
