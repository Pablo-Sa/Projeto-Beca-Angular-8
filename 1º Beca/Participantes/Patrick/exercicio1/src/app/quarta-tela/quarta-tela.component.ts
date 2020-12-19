import { Aluno } from './../terceira-tela/models/aluno';
import { CadastroService } from './../terceira-tela/shared/cadastro.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-quarta-tela',
  templateUrl: './quarta-tela.component.html',
  styleUrls: ['./quarta-tela.component.css']
})
export class QuartaTelaComponent implements OnInit {

  alunosCadastrados:Aluno[];

  constructor(private alunos : CadastroService) {

  }

  ngOnInit(): void {
    this.alunosCadastrados = this.alunos.listar();
    console.log(this.alunosCadastrados)
  }



}
