import { CursosService } from './../services/shared/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css']
})
export class NovoComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    CursosService.criouNovoCurso2.subscribe(
      sucess => {
        console.log(sucess);
      }
    )
  }

}
