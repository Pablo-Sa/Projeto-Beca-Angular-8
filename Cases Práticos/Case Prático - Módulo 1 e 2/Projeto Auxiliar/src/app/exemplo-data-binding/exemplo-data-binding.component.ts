import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'exemplo-data-binding',
  templateUrl: './exemplo-data-binding.component.html',
  styleUrls: ['./exemplo-data-binding.component.css']
})
export class ExemploDataBindingComponent implements OnInit {

  public curso: string = 'Java'; //{{  }} Interpolação
  public urlImage: string = 'http://lorempixel.com/g/400/200/' // [src] Property Binding

  public user: Usuario;

  constructor() { 
    this.user = new Usuario();
    
  }

  ngOnInit() {
  }

  logar(){
    console.log(this.user)
  }

}
