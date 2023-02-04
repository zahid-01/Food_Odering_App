import { useReducer } from 'react';
import CartContext from './CartContext';

const cartDefaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingItemIndex = state.items.findIndex(
      (el) => el.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    let updatedCart;
    if (existingItem) {
      const updatedCartItem = {
        ...existingItem,
        totalAmount: existingItem.totalAmount + action.item.totalAmount,
      };
      updatedCart = [...state.items];
      updatedCart[existingItemIndex] = updatedCartItem;
    } else {
      updatedCart = state.items.concat(action.item);
    }

    const upatedAmount =
      state.totalAmount + action.item.price * action.item.totalAmount;
    return { items: updatedCart, totalAmount: upatedAmount };
  }
  if (action.type === 'REMOVE') {
    const remElemIndex = state.items.findIndex((el) => action.id === el.id);
    const existingItem = state.items[remElemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedCart;
    if (existingItem.totalAmount === 1) {
      updatedCart = state.items.filter((el) => el.id !== action.id);
      return { items: updatedCart, totalAmount: updatedTotalAmount };
    } else {
      const updatedItem = {
        ...existingItem,
        totalAmount: existingItem.totalAmount - 1,
      };
      updatedCart = [...state.items];
      updatedCart[remElemIndex] = updatedItem;
    }
    return { items: updatedCart, totalAmount: updatedTotalAmount };
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
    dispatchCartItems({ type: 'REMOVE', id });
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
