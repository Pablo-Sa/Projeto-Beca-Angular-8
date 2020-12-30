import { Curso } from './../../model/curso-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-segundo-component',
  templateUrl: './meu-segundo-component.component.html',
  styleUrls: ['./meu-segundo-component.component.css']
})
export class MeuSegundoComponentComponent implements OnInit {
  exemploInterpolacao: string = 'Este Texto é oriundo do Arquivo TS';
  imagemAvatarGit: string = 'https://avatars1.githubusercontent.com/u/56324757?v=4';
  mostrarImagem: boolean = false;
  listaDeCursos: String[] = ['Java', 'JavaScript', 'Angular', 'Docker', 'Jenkins', 'Kubernetes'];
  novoCurso: Curso;

  getNome(){
    return ' Nome da Função';
  }

  adicionarCurso(){
    this.listaDeCursos.push('Novo Curso');
  }

  getBoolean(){
    return true;
  }

  constructor() {
    this.novoCurso = new Curso();
   }

  ngOnInit() {
  }

}
