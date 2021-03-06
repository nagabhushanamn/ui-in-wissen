import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  @Input('value') cart;
  cartLines = [];

  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
    this.cartLines = [];
    let keys = Object.keys(this.cart)
    this.cartLines = keys.map(key => this.cart[key])
  }

}
