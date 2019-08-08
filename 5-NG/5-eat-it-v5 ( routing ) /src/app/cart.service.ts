import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = {}
  cartStream = new Subject()

  constructor() { }
  getCart() {
    return this.cart;
  }
  getCartQty() {
    return Object.keys(this.cart).length;
  }
  getCartStream() {
    return this.cartStream;
  }
  addToCart(e) {
    let { item, qty } = e;
    let { id } = item;
    let cartLine = this.cart[id];
    if (cartLine) {
      cartLine = { ...cartLine, qty: cartLine.qty + 1 }
    } else {
      cartLine = { item, qty: 1 }
    }
    this.cart = { ...this.cart, [id]: cartLine }
    this.cartStream.next({ cart: this.cart })
  }

}
