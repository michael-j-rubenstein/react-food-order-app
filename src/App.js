import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Cart />
      <Header></Header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
