import React, { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';

const Button = (props) => {
  const [btnBumped, setBtnBumped] = useState(false);
  const cartCtx = useContext(CartContext);

  const noOfCartItems = cartCtx.items.reduce(
    (acc, curr) => acc + curr.totalAmount,
    0
  );

  const { items } = cartCtx;

  const btnStyles = `${styles.button} ${btnBumped ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnBumped(true);

    const time = setTimeout(() => {
      setBtnBumped(false);
    }, 300);

    return () => clearTimeout(time);
  }, [items]);

  return (
    <button className={btnStyles} onClick={props.dispCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{noOfCartItems}</span>
    </button>
  );
};

export default Button;
