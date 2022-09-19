import { useContext, useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addOneItem(item);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://food-order-app-a95c8-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={styles["cart-item"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          {...item}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          key={`${item.id}-id`}
        />
      ))}
    </ul>
  );

  const modalActions = !isCheckout && (
    <div className={styles.buttons}>
      <Button className={styles["button--close"]} onClick={props.onHideCart}>
        Close
      </Button>

      {hasItems && (
        <Button className={styles["button-order"]} onClick={orderHandler}>
          Order
        </Button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={props.onHideCart} onCheckOut={submitOrderHandler} />
      )}
      {modalActions}
    </>
  );

  const isSubmittingContent = (
    <p className={styles["submit-message"]}>Sending order data...</p>
  );

  const didSubmitContent = (
    <>
      <p className={styles["submit-message"]}>Order Submited :)</p>
      <div className={styles.buttons}>
        <Button className={styles["button--close"]} onClick={props.onHideCart}>
          Close
        </Button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingContent}
      {didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
