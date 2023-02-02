import React, { Fragment, useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartContext from './Components/Cart/CartContext';

function App() {
  const [dispCart, setDispCart] = useState(false);

  const dispCartHandler = () => {
    setDispCart(true);
  };

  const closeCartHandler = () => {
    setDispCart(false);
  };
  return (
    <CartContext.Provider value={dispCart}>
      {dispCart && <Cart closeCart={closeCartHandler} />}
      <main>
        <Header showCart={dispCartHandler} />
        <Meals />
      </main>
    </CartContext.Provider>
  );
}

export default App;
