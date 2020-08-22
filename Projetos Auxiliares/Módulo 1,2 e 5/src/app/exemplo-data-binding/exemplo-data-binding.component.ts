import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { LoginService } from '../login-example/shared/login.service';

@Component({
  selector: 'exemplo-data-binding',
  templateUrl: './exemplo-data-binding.component.html',
  styleUrls: ['./exemplo-data-binding.component.css']
})
export class ExemploDataBindingComponent implements OnInit {

  public curso: string = 'Java'; //{{  }} Interpolação
  public urlImage: string = 'http://lorempixel.com/g/400/200/' // [src] Property Binding

  public user: Usuario;
  public usuariologado: string;

  constructor() { 
    this.user = new Usuario();
    
  }

  ngOnInit() {
   this.usuariologado = window.localStorage.getItem('userLogado');
  }

  logar(){
    console.log(this.user)
  }

}
