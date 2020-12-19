import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {

  size:any = '50px';
  color:any = 'black';
  font:any = 'Arial';

  changeClass = false;

  constructor() { }

  ngOnInit(): void {
  }

  mudar(){
    this.changeClass = !this.changeClass;
    //return !this.changeClass;
  }

  teste(){
    return true;
  }

}
