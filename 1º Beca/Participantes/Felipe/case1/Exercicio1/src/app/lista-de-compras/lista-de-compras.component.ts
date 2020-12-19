import { Component, OnInit } from '@angular/core';
import { Cart } from './cart.model'
import { CartService } from './shared/Cart.service'
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.css']
})
export class ListaDeComprasComponent implements OnInit {

  cart:Cart={
    product:'', price:null
  }





  constructor(private cartService:CartService, private router:Router, private snackbar:MatSnackBar) {

   }

  ngOnInit() { }
  onSubmit(){
     var products={
      product:this.cart.product, price:this.cart.price
    }
this.cartService.save(products)
this.cart.product = ""
this.cart.price = null


  }
logout(){
  this.snackbar.open("Deslogado com Sucesso", 'x',{
    duration:2000,
    verticalPosition:'top'
  })
}
}
