import styles from "./Header.module.css";

import image from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Meals4U</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="A table full of delicious food!"></img>
      </div>
    </>
  );
};

export default Header;
