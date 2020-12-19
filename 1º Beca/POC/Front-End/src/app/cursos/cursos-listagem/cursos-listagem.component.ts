import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoService } from '../curso.service';
import { Curso } from '../cursoModel';

@Component({
  selector: 'app-cursos-listagem',
  templateUrl: './cursos-listagem.component.html',
  styleUrls: ['./cursos-listagem.component.css'],
  preserveWhitespaces: true
})
export class CursosListagemPipeComponent implements OnInit {

  cursos$: Observable<Curso[]>; 

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursos$ = this.cursoService.getList();
  }

}
