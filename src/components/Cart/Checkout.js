import React, { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === '';
const isNot5Chars = (value) => value.trim().length !== 7;
const isNotPhoneNumber = (value) => value.trim().length !== 9;

const Checkout = (props) => {

    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true,
        phone: true
    });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();
  const phoneRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostalCode = postalCodeRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredPhone = phoneRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = !isNot5Chars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPhoneIsValid = !isNotPhoneNumber(enteredPhone);

    setFormInputValidity({
        name: enteredNameIsValid,
        street: enteredStreetIsValid,
        postalCode: enteredPostalCodeIsValid,
        city: enteredCityIsValid,
        phone: enteredPhoneIsValid
    })

    const formIsValid = (enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid && enteredPhoneIsValid);

    if (!formIsValid) {
        return;
    }
    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity,
        phone: enteredPhone
    });
  };

  const nameStyles = `${styles.control} ${formInputValidity.name ? '' : styles.invalid}`;
  const streetStyles = `${styles.control} ${formInputValidity.street ? '' : styles.invalid}`;
  const postalCodeStyles = `${styles.control} ${formInputValidity.postalCode ? '' : styles.invalid}`;
  const cityStyles = `${styles.control} ${formInputValidity.city ? '' : styles.invalid}`;
  const phoneStyles = `${styles.control} ${formInputValidity.phone ? '' : styles.invalid}`;

    console.log(formInputValidity)
  return (
    <form onSubmit={confirmHandler}>
      <div className={nameStyles}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetStyles}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputValidity.street && <p>Please enter a valid street name!</p>}
      </div>
      <div className={postalCodeStyles}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeRef} />
        {!formInputValidity.postalCode && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={cityStyles}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputValidity.city && <p>Please enter a valid city name!</p>}
      </div>
      <div className={phoneStyles}>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
          ref={phoneRef}
        />
        {!formInputValidity.phone && <p>Please enter a valid phone number!</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
