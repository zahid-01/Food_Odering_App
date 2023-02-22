import React, { useState } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';

function App() {
  const [dispCart, setDispCart] = useState(false);

  const dispCartHandler = () => {
    setDispCart(true);
  };

  const closeCartHandler = () => {
    setDispCart(false);
  };

  return (
    <CartContextProvider>
      {dispCart && <Cart closeCart={closeCartHandler} />}
      <main>
        <Header showCart={dispCartHandler} />
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
