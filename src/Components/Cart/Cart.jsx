import React from 'react';
import './Cart.css';
const Cart = (props) => {

    const { length } = props.cart;
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of props.cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
        // console.log(product.shipping)
    };
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items:{length}</p>
            <p>totalPrice Price:${totalPrice}</p>
            <p>totalPrice Shipping Charge:{ totalShipping }</p>
            <p>Tax:${ tax.toFixed(2) }</p>
            <h6>Grand totalPrice:${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;