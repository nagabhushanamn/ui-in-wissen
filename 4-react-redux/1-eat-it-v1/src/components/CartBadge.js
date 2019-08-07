



/*
import React from 'react';
const CartBadge = (props) => {
    const { value } = props;
    return (
        <div>
            <i className="fa fa-shopping-cart"></i>
            &nbsp;<span className="badge badge-danger">{value}</span>
            item(s) in cart
        </div>
    );
};

export default CartBadge;
*/

import React, { Component } from 'react';
import store from '../store'

class CartBadge extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        store.subscribe(() => {
            let cart = store.getState().cart;
            this.setState({ count: Object.keys(cart).length });
        })
    }
    render() {
        return (
            <div>
                <div>
                    <i className="fa fa-shopping-cart"></i>
                    &nbsp;<span className="badge badge-danger">{this.state.count}</span>
                    item(s) in cart
                </div>
            </div>
        );
    }
}

export default CartBadge;