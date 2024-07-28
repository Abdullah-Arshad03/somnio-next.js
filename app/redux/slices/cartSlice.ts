"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { updateCart } from "@/app/util/updateCart";
import { cartItem } from "@/app/util/cartItem";
export interface CartState {
  cartItems: cartItem[];
  itemsPrice: number;
}
const getInitialState = (): CartState => {
  if (typeof window !== "undefined" && window.localStorage) {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  }
  return {
    cartItems: [],
    itemsPrice: 0,
  };
};

const initialState: CartState = getInitialState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartItem>) => {
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        existItem.qty += 1;
      } else {
        state.cartItems.push(item);
      }

      updateCart(state); // Update the cart in localStorage
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
