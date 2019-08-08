import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cart = {}
  items = [
    {
      id: 1,
      name: 'Veg',
      canBuy: true,
      imgPath: 'assets/veg.png',
      makeDate: Date.now(),
      price: 100.00,
      discount: 100.00,
      description: 'free'
    }
  ]

  getCartQty() {
    return Object.keys(this.cart).length;
  }

  addToCart(e) {
    let { item, qty } = e;
    let { id } = item;
    let cartLine = this.cart[id];
    if (cartLine) {
      cartLine = { ...cartLine, qty: cartLine.qty }
    } else {
      cartLine = { item, qty: 1 }
    }
    this.cart = { ...this.cart, [id]: cartLine }
  }


}
