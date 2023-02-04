import { useContext } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCntx = useContext(CartContext);

  const totalAm = `$${cartCntx.totalAmount.toFixed(2)}`;

  const hasItems = cartCntx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCntx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCntx.addItem({ ...item, totalAmount: 1 });
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
  return (
    <Modal closeCart={props.closeCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAm}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.closeCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
