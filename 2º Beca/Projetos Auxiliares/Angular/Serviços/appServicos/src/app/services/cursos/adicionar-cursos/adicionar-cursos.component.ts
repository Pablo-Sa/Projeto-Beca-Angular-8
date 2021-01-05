import { CursosService } from './../../shared/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-cursos',
  templateUrl: './adicionar-cursos.component.html',
  styleUrls: ['./adicionar-cursos.component.css']
})
export class AdicionarCursosComponent implements OnInit {

  public cursos:string[];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

  addCurso(curso:string){
    this.cursosService.createCurso(curso);
    this.cursosService.criouNovoCurso.subscribe(
      sucess => console.log(sucess)
    )
  }

}
