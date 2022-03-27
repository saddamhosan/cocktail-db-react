import React from 'react';
import './Cart.css';

const Cart = ({ cart}) => {
   console.log(cart);

  return (
    <div className="cart">
      <img src={cart.strDrinkThumb} alt="" />
      <h1> Name: {cart.strDrink}</h1>
      <h1>Quantity: {cart.quantity}</h1>
    </div>
  );
};

export default Cart;