

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Item from './components/Item'
import CartBadge from './components/CartBadge';
import CartView from './components/CartView';
import Home from './components/Home';
import NotFound from './components/NotFound';

import axios from 'axios';
 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  state = {
    cart: {},
    items: [
      // {
      //   id: 1,
      //   name: 'Veg',
      //   price: 100.00,
      //   canBuy: true,
      //   imgPath: '/images/veg.png',
      //   description: 'yummy'
      // }
    ]
  }
  constructor(props) {
    super(props)
    console.log("App :: constructor()");
  }
  componentDidMount() {
    console.log("App :: componentDidMount()");
    axios
      .get("http://localhost:8181/api/items")
      .then(response => response.data)
      .then(items => {
        this.setState({ items });
      })
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("App :: componentDidUpdate()");
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
    const { items, cart } = this.state;
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
    const { cart } = this.state;
    return <CartView value={cart} />
  }
  handleItemsRoute(props) {
    let { type } = props.match.params
    if (type === 'food')
      return this.renderItems()
    else return (<div>Nil</div>)
  }
  render() {
    console.log("App :: render()");
    const { cart } = this.state;
    return (
      <div>

        <Navbar value={"Eat-IT"} />
        <hr />
        <CartBadge value={Object.keys(cart).length} />
        <hr />

        <Router>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" to="/">home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/items/food">food-items</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">orders</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">login</Link>
              </li>
            </ul>
            <hr />

            <div className="container">
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/items/:type" render={props => this.handleItemsRoute(props)} />
                <Route path="/cart" render={props => this.renderCart()} />
                <Route component={NotFound} />
              </Switch>
            </div>

          </div>
        </Router>

      </div>
    );
  }
}

export default App;

