import React from "react";

const Cart = () => {
    const monsteraPrice = 8;
    const ivyPrice = 10;
    const flowersPrice = 15;
    return (
      <div>
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