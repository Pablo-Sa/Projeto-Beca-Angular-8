import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'input-property-pai',
  templateUrl: './input-property-pai.component.html',
  styleUrls: ['./input-property-pai.component.css']
})
export class InputPropertyPaiComponent implements OnInit {

  public cursos:string[] = ['Java', 'JavaScript', 'Angular8']

  constructor() { }

  ngOnInit() {
  }

}
