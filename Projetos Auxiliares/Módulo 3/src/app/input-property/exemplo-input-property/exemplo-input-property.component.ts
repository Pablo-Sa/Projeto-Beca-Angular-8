import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'exemplo-input-property',
  templateUrl: './exemplo-input-property.component.html',
  styleUrls: ['./exemplo-input-property.component.css']
})
export class ExemploInputPropertyComponent implements OnInit {

  @Input() novosCursos:string[];

  constructor() { }

  ngOnInit() {
  }

}
