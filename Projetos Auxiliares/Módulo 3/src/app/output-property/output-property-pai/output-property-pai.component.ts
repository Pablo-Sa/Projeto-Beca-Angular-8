import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'output-property-pai',
  templateUrl: './output-property-pai.component.html',
  styleUrls: ['./output-property-pai.component.css']
})
export class OutputPropertyPaiComponent implements OnInit {

  public valorInicialComponenteFilho: number = 98;
  public valorComponenteFilho: any;

  constructor() { }

  ngOnInit() {
  }

  verificarEvento(evento){
    console.log(evento)
    this.valorComponenteFilho = evento.novoValor;
  }

}
