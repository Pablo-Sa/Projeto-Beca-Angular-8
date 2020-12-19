import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-binding-interpolation',
  templateUrl: './data-binding-interpolation.component.html',
  styleUrls: ['./data-binding-interpolation.component.css']
})
export class DataBindingInterpolationComponent implements OnInit {

  public projetoConcluido: boolean = true;
  public urlImagem: string = 'http://lorempixel.com/400/200/sports/1/';
  public urlGitHub: string = 'https://github.com/Pablo-Sa/Projeto-Beca-Angular-8';

  constructor() { }

  ngOnInit() {
  }

  getValor(){
    return 20;
  }

  getProjetoConcluido(){
    return false;

  }

}
