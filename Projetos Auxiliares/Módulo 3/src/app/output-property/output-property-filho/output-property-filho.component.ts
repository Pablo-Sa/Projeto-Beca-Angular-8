import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'output-property-filho',
  templateUrl: './output-property-filho.component.html',
  styleUrls: ['./output-property-filho.component.css'],
  preserveWhitespaces: true
})
export class OutputPropertyFilhoComponent implements OnInit {

   @Input() valorInicial: number;
   @Output() mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  decrementa(){
    this.valorInicial--;
    this.mudouValor.emit({novoValor: this.valorInicial});
  }

  incrementa(){
    this.valorInicial++;
    this.mudouValor.emit({novoValor: this.valorInicial});
  }

}
