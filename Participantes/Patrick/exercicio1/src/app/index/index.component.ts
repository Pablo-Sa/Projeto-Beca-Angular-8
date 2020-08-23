import { Component, OnInit } from '@angular/core';
import { Usuario } from '../login/models/usuario';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public user: Usuario;
  public usuariologado: string;

  constructor() {
    this.user = new Usuario();
  }

  ngOnInit(): void {
    this.usuariologado = window.localStorage.getItem('userLogado');
  }

  logar(){
    console.log(this.user);
  }

}
