import { CursosService } from './../services/shared/cursos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-emissor',
  templateUrl: './emissor.component.html',
  styleUrls: ['./emissor.component.css'],
  preserveWhitespaces: true
})
export class EmissorComponent implements OnInit {

  public mensagensRecebidas:string [] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.mensagensRecebidasTeste();
  
  }

  enviarMensagem(mensagem:string){
    this.cursosService.enviarMensagem(mensagem);
  }

  mensagensRecebidasTeste(){
    this.cursosService.chatMensagem.subscribe(
      sucess => {
        this.mensagensRecebidas.push(sucess);
      }
    )
  }

}
