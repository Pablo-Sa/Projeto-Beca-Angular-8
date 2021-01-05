import { CursosService } from './../shared/cursos.service';
import { AlunosService } from './../shared/alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos-servicos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public alunos:string[];
  public cursos:string[];
  public alunosService: AlunosService;
  public novosCursos: string[] = [];

  constructor(private cursosService: CursosService) { 
    this.alunosService = new AlunosService();
  }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
    this.cursos = this.cursosService.getCursos();
    this.cursosService.criouNovoCurso.subscribe(
      sucess =>{
        console.log(sucess)
        this.novosCursos.push(sucess);
      },
      error => {}
    )
  }

}
