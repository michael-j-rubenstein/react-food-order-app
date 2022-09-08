import styles from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Spicy Chicken Burger",
    description: "Juicy, bbq sauce, coleslaw, chicken burger",
    price: 15.99,
  },
  {
    id: "m5",
    name: "Burrito",
    description:
      "Comes with steak, rice, beans, guacamole, corn and salsa. Delicious!",
    price: 13.99,
  },
  {
    id: "m6",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m7",
    name: "Butter Chicken",
    description:
      "Start your day with a nice bowl of butter chicken, not too spicy and not too sweet, great for everyone!",
    price: 23.99,
  },
  {
    id: "m8",
    name: "Pizza",
    description: "Flavors: Margerita, BBQ Chicken, Steak, Potato, Yam. ",
    price: 11.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      ></MealItem>
    );
  });
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
