import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../shared/cadastro.service';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista : any;

  constructor(private cadastroService: CadastroService ) { }

  ngOnInit(): void {

    this.lista = this.cadastroService.cadastro

  }

}
