import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ItemService } from '../item.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('value') item;
  @Output() buy = new EventEmitter()
  currentTab: number = 1
  reviews = []

  constructor(
    private cartService: CartService,
    private itemService: ItemService) { }

  ngOnInit() {
  }

  handleBuy(event) {
    this.cartService.addToCart({ item: this.item, qty: 1 })
  }

  changeTab(event, tabIndex) {
    event.preventDefault()
    this.currentTab = tabIndex
    if (this.currentTab === 3) {
      this.itemService.getReviews(this.item.id)
        .subscribe(reviews => {
          this.reviews = reviews
        })
    }
  }
  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex

  }

}
