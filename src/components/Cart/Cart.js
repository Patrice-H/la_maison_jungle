import React, { useState } from "react";
import './Cart.css';

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const monsteraPrice = 8;
    const ivyPrice = 10;
    const flowersPrice = 15;
    return (
        isOpen ? 
        <div className='cart'>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            <ul>
                <li>Monstera : { monsteraPrice }€</li>
                <li>Lierre : { ivyPrice }€</li>
                <li>Bouquet de fleurs : { flowersPrice}€</li>
            </ul>
            <p>Total : { monsteraPrice + ivyPrice + flowersPrice }€</p>
        </div> : 
        <button onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
    );
  }

  export default Cart;