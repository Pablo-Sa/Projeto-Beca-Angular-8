import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.model';
import { ProdutoService } from '../shared/produto.service'


@Component({
  selector: 'app-adiciona-produtos',
  templateUrl: './adiciona-produtos.component.html',
  styleUrls: ['./adiciona-produtos.component.css']
})
export class AdicionaProdutosComponent implements OnInit {

  produto: Produto = {
    nomeProduto: '',
    descricaoProduto: '',
    precoProduto: null,
  }

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const produtos = {
      nomeProduto: this.produto.nomeProduto,
      descricaoProduto: this.produto.descricaoProduto,
      precoProduto: this.produto.precoProduto
    }

    this.produtoService.cadastraProduto(produtos);
    this.produto.nomeProduto = '';
    this.produto.descricaoProduto = '';
    this.produto.precoProduto = null;
  }


}
