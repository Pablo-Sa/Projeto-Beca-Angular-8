import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../shared/cursos.service';

@Component({
  selector: 'app-adicionar-cursos',
  templateUrl: './adicionar-cursos.component.html',
  styleUrls: ['./adicionar-cursos.component.css'],
  providers: [CursosService]
})
export class AdicionarCursosComponent implements OnInit {

  public cursos:string[];

  constructor(private cursosServive: CursosService) { 
  }

  ngOnInit() {
    this.cursos = this.cursosServive.getCursos();
  }

  addCurso(curso:string){
    this.cursosServive.createCurso(curso);    
  }

}
