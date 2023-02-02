import React, { Fragment } from 'react';
import mealsImg from '../../assets/meals.jpg';
// import CartContext from '../Cart/CartContext';
import styles from './Header.module.css';
import Button from './HeaderCartButton';

const Header = (props) => {
  // const ctx = useContext(CartContext);

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Wazwan</h1>
        <Button text="Cart" dispCart={props.showCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="" />
      </div>
    </Fragment>
  );
};

export default Header;
