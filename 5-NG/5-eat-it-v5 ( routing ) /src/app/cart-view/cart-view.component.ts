import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  cart;
  cartLines = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart()
  }
  ngDoCheck() {
    this.cartLines = [];
    let keys = Object.keys(this.cart)
    this.cartLines = keys.map(key => this.cart[key])
  }

}
