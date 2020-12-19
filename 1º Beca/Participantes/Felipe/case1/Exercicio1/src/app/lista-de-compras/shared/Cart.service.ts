import { Injectable } from '@angular/core';
import { Cart } from '../cart.model';

@Injectable({
  providedIn:"root"
})
export class CartService {

cart:Cart[]=[]
constructor() { }

  save(c){
    this.cart.push(c);

  }


}
