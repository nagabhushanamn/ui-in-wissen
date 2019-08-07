
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
            </div>
        </div>
    );
};

export default CartView;