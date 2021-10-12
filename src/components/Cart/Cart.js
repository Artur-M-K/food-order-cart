import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [isError, setIsError] = useState('')
  const cartCtx = useContext(CartContext);

  const totalAmount = `€ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmit(true);
    try {
      await fetch(`https://react-meals-app-ff022-default-rtdb.europe-west1.firebasedatabase.app/orders.json`, {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          order: cartCtx.items
        })
      })
    }catch(err) {
      setIsError(err.message)
    }
    setIsSubmit(false);
    setIsSubmited(true);
    cartCtx.clearCart();
  };
  

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles["button-alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = <>
    {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
      {!isCheckout && modalActions}
  </>

  const isSubmittingModalContent = <p>Sending data to server...</p>
  const isSubmitedModalContent = <>
  <p>The data has been successfully sent</p>
  <div className={styles.actions}>
      <button className={styles["button-alt"]} onClick={props.onClose}>
        Close
      </button>
    </div>
  </>
  const isErrorModalContent = <>
  <p className={styles.invalid}>{isError}</p>
    <div className={styles.actions}>
      <button className={styles["button-alt"]} onClick={props.onClose}>
        Close
      </button>
    </div>
  </>

  return (
    <Modal onClose={props.onClose}>
     {!isSubmit && !isSubmited && cartModalContent}
     {!isSubmit && isError !== '' && isErrorModalContent} 
     {isSubmit && isError === '' && isSubmittingModalContent}
     {!isSubmit && isSubmited && isError === '' && isSubmitedModalContent}
    </Modal>
  );
};

export default Cart;
