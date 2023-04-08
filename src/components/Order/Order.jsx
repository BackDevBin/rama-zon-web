import React from 'react';
import './Order.css'

const Order = ({ cart }) => {

let total = 0;
    for (const product of cart) {
      total += product.price;

    }
    return (
        <div>
            <h3>Order Summary :</h3>
            <p>Select Item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge : </p>
            <p>Tax: </p>
            <h4>Grand Total:</h4>
        </div>
    );
};

export default Order;