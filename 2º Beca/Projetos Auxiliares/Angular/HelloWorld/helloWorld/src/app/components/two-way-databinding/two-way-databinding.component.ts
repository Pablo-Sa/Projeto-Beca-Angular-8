import { Curso } from './../../model/curso-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-databinding',
  templateUrl: './two-way-databinding.component.html',
  styleUrls: ['./two-way-databinding.component.css']
})
export class TwoWayDatabindingComponent implements OnInit {
  listaDeCurso: Curso[] = [];
  novoCurso: Curso;

  adicionarCurso(){
    this.listaDeCurso.push(this.novoCurso);
  }
  
  constructor() { 
    this.novoCurso = new Curso();
 }

  ngOnInit() {
  }

}
