import React from "react";
import './Cart.css';

const Cart = () => {
    const monsteraPrice = 8;
    const ivyPrice = 10;
    const flowersPrice = 15;
    return (
        <div className='cart'>
            <h2>Panier</h2>
            <ul>
                <li>Monstera : { monsteraPrice }€</li>
                <li>Lierre : { ivyPrice }€</li>
                <li>Bouquet de fleurs : { flowersPrice}€</li>
            </ul>
            <p>Total : { monsteraPrice + ivyPrice + flowersPrice }€</p>
        </div>
    );
  }

  export default Cart;