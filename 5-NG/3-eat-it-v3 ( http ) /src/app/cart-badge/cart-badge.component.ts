import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.scss']
})
export class CartBadgeComponent implements OnInit {

  count = 0

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartStream()
      .subscribe((e: any) => {
        let { cart } = e;
        this.count = Object.keys(cart).length
      })
  }

}
