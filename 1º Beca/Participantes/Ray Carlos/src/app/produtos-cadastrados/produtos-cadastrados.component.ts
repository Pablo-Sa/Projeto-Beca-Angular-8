import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto.service'

@Component({
  selector: 'app-produtos-cadastrados',
  templateUrl: './produtos-cadastrados.component.html',
  styleUrls: ['./produtos-cadastrados.component.css']
})
export class ProdutosCadastradosComponent implements OnInit {

  produtos: any
  constructor(private produtosService: ProdutoService) { 
  }


  ngOnInit(): void {
    this.produtos=this.produtosService.produtosArray
  }

}
