import { useContext, useState } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';
import Checkout from './Checkout';
import axios from 'axios';

const Cart = (props) => {
  const [dispCheckout, setDispCheckout] = useState(false);
  const [error, setError] = useState(false);

  const cartCntx = useContext(CartContext);

  const totalAm = `$${cartCntx.totalAmount.toFixed(2)}`;

  const hasItems = cartCntx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCntx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCntx.addItem({ ...item, totalAmount: 1 });
  };

  const showCheckoutHandler = () => {
    setDispCheckout(true);
  };

  const closeCheckoutHandler = () => {
    setDispCheckout(false);
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCntx.items.map((el) => (
        <CartItem
          key={el.id}
          name={el.name}
          price={el.price}
          amount={el.totalAmount}
          onRemove={cartItemRemoveHandler.bind(null, el.id)}
          onAdd={cartItemAddHandler.bind(null, el)}
        />
      ))}
    </ul>
  );

  const modalButons = (
    <div className={styles.actions}>
      <button className={styles['button--alt']} onClick={props.closeCart}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={showCheckoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const finalOrder = async (name, street, city, postal) => {
    await axios({
      method: 'POST',
      url: 'https://start-wars-58d68-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
      data: {
        name,
        street,
        city,
        postal,
        items: cartCntx.items,
        totalAmount: totalAm,
      },
    }).catch((e) => setError(true));
  };

  return (
    <Modal closeCart={props.closeCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAm}</span>
      </div>
      {dispCheckout && (
        <Checkout
          closeCheckout={closeCheckoutHandler}
          cancel={props.closeCart}
          finalOrder={finalOrder}
        />
      )}
      {!dispCheckout && modalButons}
      {error && <p>Something went wrong!</p>}
    </Modal>
  );
};

export default Cart;
