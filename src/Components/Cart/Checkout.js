import { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isNotFit = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [inputsValidity, setInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameRef = useRef('');
  const streetRef = useRef('');
  const postalRef = useRef('');
  const cityRef = useRef('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const nameValidity = !isEmpty(enteredName);
    const streetValidity = !isEmpty(enteredStreet);
    const cityValidity = !isEmpty(enteredCity);
    const postalValidity = !isNotFit(enteredPostal);

    setInputValidity({
      name: nameValidity,
      street: streetValidity,
      city: cityValidity,
      postal: postalValidity,
    });

    if (!nameValidity || !streetValidity || !cityValidity || !postalValidity)
      return;

    props.finalOrder(enteredName, enteredStreet, enteredCity, enteredPostal);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!inputsValidity.name && <p>Enter Name</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!inputsValidity.street && <p>Enter Street</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalRef} />
        {!inputsValidity.postal && <p>Enter Valid Postal Code</p>}
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!inputsValidity.city && <p>Enter City</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.cancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
