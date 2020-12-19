import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Aluno } from './models/aluno';
import { CadastroService } from './shared/cadastro.service';

@Component({
  selector: 'terceira-tela',
  templateUrl: './terceira-tela.component.html',
  styleUrls: ['./terceira-tela.component.css']
})
export class TerceiraTelaComponent implements OnInit {
  aluno : Aluno={
    alunoNome: '',
    alunoClasse: ''
  }

  constructor(public router: Router, public service: CadastroService) { }

  ngOnInit(): void {

  }

  onSubmit(){
    // const alunos = {
    //   alunoNome : this.aluno.alunoNome,
    //   alunoClasse : this.aluno.alunoClasse
    // }
    console.log(this.aluno)
    this.service.cadastrar(this.aluno);
    // this.aluno.alunoNome = "";
    // this.aluno.alunoClasse = "";
  }

}
