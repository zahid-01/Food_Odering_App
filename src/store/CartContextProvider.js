import { useReducer } from 'react';
import CartContext from './CartContext';

const cartDefaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedCart = state.items.concat(action.item);
    const upatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedCart, totalAmount: upatedAmount };
  }
  if (action.type === 'REMOVE') {
  }
  return cartDefaultState;
};

const CartContextProvider = (props) => {
  const [cartItems, dispatchCartItems] = useReducer(
    cartReducer,
    cartDefaultState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartItems({ type: 'ADD', item });
  };

  const removeItemToCartHandler = (id) => {
    console.log('Hello');
  };

  const cartContext = {
    items: cartItems.items,
    totalAmount: cartItems.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
