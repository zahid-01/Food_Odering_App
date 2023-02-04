import { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/CartContext';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const onAddItem = (enteredAmount) => {
    cartCtx.addItem({
      totalAmount: enteredAmount,
      name: props.name,
      id: props.id,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{`$${props.price}`}</div>
      </div>
      <MealItemForm id={props.id} onAddItem={onAddItem} />
    </li>
  );
};

export default MealItem;
