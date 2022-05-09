/* eslint-disable react/prop-types */
import React, { useState } from "react";
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const updateCart = props.updateCart;

    const [isOpen, setIsOpen] = useState(true);
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price,
        0
    );

    return (
        isOpen ? 
        <div className='cart'>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`}>
                    {name} {price}€ X {amount}
                </div>
            ))}
            <h3>Total : { total }€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div> : 
        <button onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
    );
  }

  export default Cart;