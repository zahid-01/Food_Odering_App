import React, { useContext } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';

const Button = (props) => {
  const cartCtx = useContext(CartContext);

  const noOfCartItems = cartCtx.items.length;

  return (
    <button className={styles.button} onClick={props.dispCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default Button;
