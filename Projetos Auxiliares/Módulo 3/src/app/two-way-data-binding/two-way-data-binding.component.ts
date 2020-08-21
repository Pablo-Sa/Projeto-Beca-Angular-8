import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  public valor:string = 'Maria Antônia';

  constructor() { }

  ngOnInit() {
  }

  setValue(novoValor:string){
    this.valor = novoValor;
  }

}
