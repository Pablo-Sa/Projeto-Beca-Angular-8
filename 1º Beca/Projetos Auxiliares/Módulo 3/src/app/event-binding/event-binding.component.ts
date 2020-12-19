import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public valorSalvo: string = '';
  public isMouse:boolean = false;


  constructor() { }

  ngOnInit() {
  }

  meClique(){
    alert('Botão Clicado');
  }

  // onKey(evento){
  //   console.log(evento);
  // }

  onKey(evento: KeyboardEvent){
    console.log(evento);
  }

  salvarValor(valor:string){
    this.valorSalvo = valor;

  }

  onMouseOuverAndOut(){
    this.isMouse = !this.isMouse;
  }

}
