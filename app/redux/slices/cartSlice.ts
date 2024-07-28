import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "@/app/util/updateCart";
import { itemI } from "@/app/util/updateCart";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") || "")
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x: itemI) => x.id === item.id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x: itemI) =>
          x.id === existItem.id ? { ...item, qty: x.qty++ } : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
  },
});

export { cartSlice };
