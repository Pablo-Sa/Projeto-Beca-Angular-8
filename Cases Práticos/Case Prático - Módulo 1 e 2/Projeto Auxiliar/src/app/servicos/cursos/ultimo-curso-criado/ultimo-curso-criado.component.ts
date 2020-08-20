import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../shared/cursos.service';

@Component({
  selector: 'app-ultimo-curso-criado',
  templateUrl: './ultimo-curso-criado.component.html',
  styleUrls: ['./ultimo-curso-criado.component.css']
})
export class UltimoCursoCriadoComponent implements OnInit {

  public ultimoCursoCriado: string;

  constructor(private cursoService: CursosService) { }

  ngOnInit() {
    this.cursoService.emitirCurso.subscribe(
      sucess => this.ultimoCursoCriado = sucess
    )

    this.cursoService.emitirCursoRXJS.subscribe(
      sucess => console.log(sucess)
    )
  }

}
