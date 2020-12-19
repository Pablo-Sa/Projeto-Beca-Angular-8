import { Component, OnInit } from '@angular/core';
import { Cadastro } from './cadastro.model';
import { CadastroService } from '../shared/cadastro.service';


@Component({
  selector: 'cadastramento',
  templateUrl: './cadastramento.component.html',
  styleUrls: ['./cadastramento.component.css']
})
export class CadastramentoComponent implements OnInit {

  cadastro: Cadastro = {
    nomeRepublica: '',
    nomeResponsavel: '',
    numMoradores: null
  }

  constructor(private cadastroService: CadastroService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const salvar = {

      nomeRepublica: this.cadastro.nomeRepublica,
      nomeResponsavel: this.cadastro.nomeResponsavel,
      numMoradores: this.cadastro.numMoradores

    }

    this.cadastroService.cadastroRepublica(salvar);
    this.cadastro.nomeRepublica = '';
    this.cadastro.nomeResponsavel = '';
    this.cadastro.numMoradores = null;

  }

}
