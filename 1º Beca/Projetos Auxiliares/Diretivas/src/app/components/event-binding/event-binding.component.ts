import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  public valorAtual: string = "";
  public valorSalvoInput: string = "";
  public isOnMouse: boolean = false;

  clickEventHandler(){
    alert('Botão Clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  valorSalvo(valor){
    this.valorSalvoInput = valor;
  }

  mouseout(){
    this.isOnMouse = !this.isOnMouse;
  }

  ngOnInit(): void {
  }

}
