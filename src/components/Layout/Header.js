import styles from "./Header.module.css";

import image from "../../assets/meals.jpeg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="A table full of delicious food!"></img>
      </div>
    </>
  );
};

export default Header;
