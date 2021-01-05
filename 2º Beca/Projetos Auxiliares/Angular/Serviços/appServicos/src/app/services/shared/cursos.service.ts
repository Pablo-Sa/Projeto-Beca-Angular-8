import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn:'root'})
export class CursosService {

  public criouNovoCurso = new EventEmitter<string>();
  public static criouNovoCurso2 = new EventEmitter<string>();
  public chatMensagem = new EventEmitter<string>(); // Subject
  
  constructor() {
    console.log('Curso Service Instânciado.')
   }

  private cursos:string[] = ['Java','JavaScript', 'Angular8']

  getCursos(){
    return this.cursos;
  }

  enviarMensagem(mensagem:string){
    this.chatMensagem.emit(mensagem);
  }


  createCurso(curso:string){
    this.cursos.push(curso);
    this.criouNovoCurso.emit(curso);
    CursosService.criouNovoCurso2.emit(curso);

  }
}
