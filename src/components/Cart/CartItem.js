import styles from "./CartItem.module.css";
import Button from "../UI/Button";

const CartItem = (props) => {
  const price = `$${props.price}`;
  const quanity = `x${props.amount}`;
  return (
    <li key={props.id} className={styles["cart-item"]}>
      <div>
        <h3>{props.name}</h3>
        <span className={styles["cart-item__price"]}>{price}</span>
        <span className={styles["cart-item__quantity"]}>{quanity}</span>
      </div>
      <div>
        <Button className={styles.btn} onClick={props.onRemove}>
          -
        </Button>
        <Button className={styles.btn} onClick={props.onAdd}>
          +
        </Button>
      </div>
    </li>
  );
};

export default CartItem;
