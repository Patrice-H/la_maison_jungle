import React from "react";
import Banner from '../Banner/Banner';
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import ShoppingList from "../ShoppingList/ShoppingList";
import './App.css';

const App = () => {
  return (
    <>
      <Banner />
      <div className='layout'>
        <Cart />
        <ShoppingList />
      </div>
      <Footer />
    </>
  );
}

export default App;
