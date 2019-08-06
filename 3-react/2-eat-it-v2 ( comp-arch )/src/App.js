

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Item from './components/Item'
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';

class App extends Component {
  state = {
    isCartOpen: false,
    cart: {},
    items: [
      {
        id: 1,
        name: 'Veg',
        price: 100.00,
        canBuy: true,
        imgPath: 'images/veg.png',
        description: 'veg is always yummy & healthy'
      },
      {
        id: 2,
        name: 'NonVeg',
        price: 80.00,
        canBuy: true,
        imgPath: 'images/non-veg.png',
        description: 'non-veg is yummy but not healthy'
      }
    ]
  }
  constructor(props) {
    super(props)
    console.log("App :: constructor()");
  }

  /*
  {
    id:{item,qty}
  }
  */

  toggleCartView(e) {
    e.preventDefault()
    const { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen });
  }

  addToCart(e) {
    let { item } = e;
    let { id } = item;
    let { cart } = this.state;
    let cartLine;
    if (cart[id]) {
      cartLine = cart[id]
      cartLine = { ...cartLine, qty: cartLine.qty + 1 }
    } else {
      cartLine = { item, qty: 1 }
    }
    cart = { ...cart, [id]: cartLine }
    this.setState({ cart });
  }

  renderItems() {
    const { items, cart, isCartOpen } = this.state;
    if (!isCartOpen)
      return items.map((item, idx) => {
        let cartLine = cart[item.id] || {}
        let { qty } = cartLine
        qty = qty || 0
        return (
          <div key={idx} className="list-group-item">
            <Item value={item} cartQty={qty} onBuy={e => this.addToCart(e)} />
          </div>
        )
      })
  }
  renderCart() {
    const { cart, isCartOpen } = this.state;
    if (isCartOpen)
      return <CartView value={cart} />
  }
  render() {
    console.log("App :: render()");
    const { cart, isCartOpen } = this.state;
    return (
      <div>
        <Navbar value={"Eat-IT"} />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a onClick={e => this.toggleCartView(e)} className="nav-link" href="/">{isCartOpen ? 'items' : 'cart'}</a>
          </li>
        </ul>
        <hr />
        <div className="container">
          {this.renderCart()}
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

export default App;

