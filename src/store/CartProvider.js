import { useReducer } from "react";
import CartContext from "./cart-context";
// Manages cart context data, and adds data to it

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM" || action.type === "ADD_ONE_ITEM") {
    let updatedTotalAmount = state.totalAmount;
    if (action.type === "ADD_ITEM") {
      updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
    } else {
      updatedTotalAmount = state.totalAmount + action.item.price;
    }

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex]; // either null or CartItem

    let updatedItems;

    if (existingCartItem) {
      let updatedItem;
      let prevAmount = +existingCartItem.amount;
      let newAmount = +action.item.amount;

      if (action.type === "ADD_ITEM") {
        updatedItem = {
          ...existingCartItem,
          amount: prevAmount + newAmount,
        };
      } else {
        // action.type === "ADD_ONE_ITEM case"
        updatedItem = {
          ...existingCartItem,
          amount: prevAmount + 1,
        };
      }
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    let existingItemAmount = +existingItem.amount;
    if (existingItemAmount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      let updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const addSingleItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ONE_ITEM", item: item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    addOneItem: addSingleItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
