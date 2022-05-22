import React, {useState} from "react";
import PropTypes from "prop-types";
import './Cart.css';

/**
 * Component detailing the name, the unit price and the quantity of items in the cart, 
 * the total amount to pay, a button to reset the cart and a open/close button
 * 
 * @component
 * @param {[]|object[]} cart - An empty array or an array of objects representing the contents of the cart
 * @param {string} cart[].name - The name of item
 * @param {number} cart[].price - The unit price of item
 * @param {number} cart[].amount - The quantity of item
 * @param {function} updateCart - Function to update the cart
 * @returns A function that returns a component.
 */
const Cart = ({cart, updateCart}) => {

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

  Cart.propTypes = {
      cart: PropTypes.array,
      updateCart: PropTypes.func.isRequired
  }

  export default Cart;