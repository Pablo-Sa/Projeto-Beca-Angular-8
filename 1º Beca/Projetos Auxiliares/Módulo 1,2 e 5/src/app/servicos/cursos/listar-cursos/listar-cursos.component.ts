import { CursosService } from './../../shared/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css'],
  providers: [CursosService]
})
export class ListarCursosComponent implements OnInit {

  public cursos:string[];

  constructor(private cursosServive: CursosService) { 
  }

  ngOnInit() {
    this.cursos = this.cursosServive.getCursos();
    // this.cursosServive.emitirCurso.subscribe(
    //   sucess => console.log(sucess)

    // ) Não será possível, pois cada um possui sua própria instância.

    CursosService.criouNovoCurso.subscribe(
      novoCurso => this.cursos.push(novoCurso)
    )

  }

}
