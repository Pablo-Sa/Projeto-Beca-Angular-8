import { Component, OnInit } from '@angular/core';
import { Cart } from '../lista-de-compras/cart.model';
import { CartService } from '../lista-de-compras/shared/Cart.service';

@Component({
  selector: 'app-tabela-compras',
  templateUrl: './tabela-compras.component.html',
  styleUrls: ['./tabela-compras.component.css']
})
export class TabelaComprasComponent implements OnInit {
  newCart:any
  total: number = 0
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
   this.newCart = this.cartService.cart
   for(let key in this.newCart){
     this.total += this.newCart[key].price
     console.log(this.total)
   }

  }

}
