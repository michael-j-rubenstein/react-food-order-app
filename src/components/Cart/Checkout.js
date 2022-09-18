import { useRef, useState } from "react";

import styles from "./Checkout.module.css";

import Button from "../UI/Button";

const isEmpty = (value) => value.trim() === "";
const isValidPostal = (value) => value.length === 6;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isValidPostal(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    // Submit cart data
  };

  const nameControlStyles = `${styles.control} ${
    formInputsValidity.name ? "" : styles.invalid
  }`;
  const streetControlStyles = `${styles.control} ${
    formInputsValidity.street ? "" : styles.invalid
  }`;
  const postalControlStyles = `${styles.control} ${
    formInputsValidity.postalCode ? "" : styles.invalid
  }`;
  const cityControlStyles = `${styles.control} ${
    formInputsValidity.city ? "" : styles.invalid
  }`;

  return (
    <form className={styles["control-group"]} onSubmit={confirmHandler}>
      <div className={nameControlStyles}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && (
          <p className={styles["error-text"]}>Please enter a valid name!</p>
        )}
      </div>
      <div className={streetControlStyles}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && (
          <p className={styles["error-text"]}>Please enter a valid street!</p>
        )}
      </div>
      <div className={postalControlStyles}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postalCode && (
          <p className={styles["error-text"]}>
            Please enter a valid postal code! (6 characters)
          </p>
        )}
      </div>
      <div className={cityControlStyles}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && (
          <p className={styles["error-text"]}>Please enter a valid city!</p>
        )}
      </div>
      <div className={styles["form-buttons"]}>
        <Button type="button" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button>Confirm</Button>
      </div>
    </form>
  );
};

export default Checkout;
