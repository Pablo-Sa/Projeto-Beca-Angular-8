import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtosArray = [];

  constructor() { }

  cadastraProduto(p){
    this.produtosArray.push(p)
    console.log(this.produtosArray)
  }
}
