
/*
import React from 'react';

let total = 0.0;
function renderCartItems(cart) {
    total = 0.0;
    let keys = Object.keys(cart);
    return keys.map((key, idx) => {
        let cartLine = cart[key];
        let { item, qty } = cartLine
        total += item.price * qty
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>{qty}</td>
                <td>&#8377;{item.price * qty}</td>
            </tr>
        )
    })
}

const CartView = (props) => {
    const { value: cart } = props;
    if (Object.keys(cart).length === 0)
        return (
            <div>cart is empty</div>
        )
    else
        return (
            <div className="card">
                <div className="card-header">item(s) in cart</div>
                <div className="card-body">
                    <table className="table table-bordered table-sm">
                        <tbody>
                            {renderCartItems(cart)}
                        </tbody>
                    </table>
                    <hr />
                    Total : &#8377;{total}
                    <hr />
                    <button className="btn btn-dark">checkout</button>
                </div>
            </div>
        );
};

export default CartView;

*/

import React, { Component } from 'react';
import store from '../store'
import { buy } from '../actions/cart'

class CartView extends Component {
    total = 0.0
    state = {
        cart: {}
    } 
    componentDidMount() {
        let cart = store.getState().cart;
        this.setState({ cart });
        this.unsubscribe=store.subscribe(() => {
            let cart = store.getState().cart;
            this.setState({ cart });
        })
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    renderCartItems(cart) {
        this.total = 0.0;
        let keys = Object.keys(cart);
        return keys.map((key, idx) => {
            let cartLine = cart[key];
            let { item, qty } = cartLine
            this.total += item.price * qty
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td><i onClick={e => store.dispatch(buy(item, 1))} className="fa fa-plus"></i></td>
                    <td>{qty}</td>
                    <td><i onClick={e => store.dispatch(buy(item, -1))} className="fa fa-minus"></i></td>
                    <td>&#8377;{item.price * qty}</td>
                </tr>
            )
        })
    }
    render() {
        const { cart } = this.state;
        if (Object.keys(cart).length === 0)
            return (
                <div>cart is empty</div>
            )
        else
            return (
                <div className="card">
                    <div className="card-header">item(s) in cart</div>
                    <div className="card-body">
                        <table className="table table-bordered table-sm">
                            <tbody>
                                {this.renderCartItems(cart)}
                            </tbody>
                        </table>
                        <hr />
                        Total : &#8377;{this.total}
                        <hr />
                        <button className="btn btn-dark">checkout</button>
                    </div>
                </div>
            );
    }
}

export default CartView;