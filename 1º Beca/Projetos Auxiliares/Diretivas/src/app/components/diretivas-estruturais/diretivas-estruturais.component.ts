import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  number1:number = 0;
  number2:number = 0;
  word1:string = "Hello World";
  validation:boolean = false;
  numeroRepeticoes:number = 0;
  iterations = [];
  superhero:any = "";

  constructor() { }

  ngOnInit(): void {
  }

  verificar(){
    if(this.number1 > this.number2){
      this.validation = true;
    } else {
      this.validation = false;
    }
  }

  confirmar(){
    this.iterations = [];
    for(let i=0 ; i < this.numeroRepeticoes; i++){
      let object = { 'index': i,
                     'name': 'teste' + i
                    };

      this.iterations.push(object);
    }
  }

  indexOf(){
    return (this.word1.toLowerCase().indexOf("teste") > -1);
  }

}
