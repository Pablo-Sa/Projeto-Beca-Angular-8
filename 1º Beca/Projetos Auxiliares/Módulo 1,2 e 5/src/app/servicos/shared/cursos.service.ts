import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CursosService {

  private cursos:string[] =['Java', 'JavaScript','Angular8'];
  
  public emitirCurso = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>(); 
  public emitirCursoRXJS = new Subject<string>();
  
  constructor() {
    console.log('Cursos Service')
   }

  getCursos(){
    return this.cursos;
  }

  createCurso(curso:string){
    this.cursos.push(curso);
    this.emitirCurso.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
    this.emitirCursoRXJS.next(curso);

  }


}
