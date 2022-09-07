import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.content}>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
