import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal among our thousands of restaurants and enjoy a
        delicous breakfast, lunch, or dinner at the comfort of your own home!
      </p>
      <p>
        All out meals are cooked with the top of the line quality ingredients,
        just-in-time by experienced chefs all across the globe!
      </p>
    </section>
  );
};

export default MealsSummary;
