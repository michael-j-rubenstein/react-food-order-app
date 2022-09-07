import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles["meal-item"]}>
      <div className={styles["meal-content"]}>
        <h3>{props.name}</h3>
        <div className={styles["meal__description"]}>{props.description}</div>
        <div className={styles["meal__price"]}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
