import Button from "../UI/Button";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-item"]}>
      {[
        { id: "c1", name: "sushi", amount: 2, price: 12.99 },
        { id: "c2", name: "burger", amount: 1, price: 15.99 },
      ].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>
      <div className={styles.buttons}>
        <Button className={styles["button--alt"]} onClick={props.onHideCart}>
          Close
        </Button>
        <Button className={styles.button}>Checkout</Button>
      </div>
    </Modal>
  );
};

export default Cart;
