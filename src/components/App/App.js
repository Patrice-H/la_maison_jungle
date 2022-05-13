import React from "react";
import { useState, useEffect } from 'react'
import Banner from '../Banner/Banner';
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import ShoppingList from "../ShoppingList/ShoppingList";
import './App.css';

const App = () => {
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

  return (
    <>
      <Banner />
      <div className='layout'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </>
  );
}

export default App;
