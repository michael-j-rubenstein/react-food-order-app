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
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onHideCart} />}
      {modalActions}
    </Modal>
  );
};

export default Cart;
