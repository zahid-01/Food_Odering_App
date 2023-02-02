import styles from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: '1', name: 'wazwan', price: 700, amount: '1400' }].map((el) => (
        <li key="1">{el.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>1399</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
