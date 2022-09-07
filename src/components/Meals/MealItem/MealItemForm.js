import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button>+Add</Button>
    </form>
  );
};

export default MealItemForm;
