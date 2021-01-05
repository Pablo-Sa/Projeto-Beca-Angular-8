import { CursosService } from './../services/shared/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recebedor',
  templateUrl: './recebedor.component.html',
  styleUrls: ['./recebedor.component.css']
})
export class RecebedorComponent implements OnInit {

  public mensagensRecebidas:string [] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursosService.chatMensagem.subscribe(
      sucess => {
        console.log(sucess);
        this.mensagensRecebidas.push(sucess);
      }
    )
  }

  enviarMensagem(mensagem:string){
    this.cursosService.enviarMensagem(mensagem);
  }


}
