import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input('value') item;
  @Output() buy = new EventEmitter()
  currentTab: number = 1
  reviews = [
    { author: 'Nag@mail.com', stars: 1, body: 'love it' }
  ]
  constructor() { }

  ngOnInit() {
  }

  handleBuy(event) {
    this.buy.emit({ item: this.item, qty: 1 })
  }

  changeTab(event, tabIndex) {
    event.preventDefault()
    this.currentTab = tabIndex
  }
  isTabSelected(tabIndex) {
    return this.currentTab === tabIndex
  }

}
