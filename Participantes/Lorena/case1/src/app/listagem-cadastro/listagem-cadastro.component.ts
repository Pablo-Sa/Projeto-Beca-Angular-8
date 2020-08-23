import { Cadastro } from './../projeto';
import { ProjetosService } from './../Servicos/projetos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-listagem-cadastros',
  templateUrl: './listagem-cadastro.component.html',
  styleUrls: ['./listagem-cadastro.component.css']
})
export class ListagemCadastrosComponent implements OnInit {

  constructor(private service: ProjetosService) { }



  cadastro$: Observable<Cadastro[]>


  ngOnInit(): void {
    // this.service.list().subscribe(dados => this.cadastro = dados);
    this.cadastro$ = this.service.list();
  }

}
