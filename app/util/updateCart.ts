import { RootState } from "../redux/store";

export const addDecimals = (num: number): string => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export interface itemI {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  qty: number;
}

interface stateType {
  state: {
    cartItems: itemI[];
    itemsPrice: number;
  };
}

export const updateCart = ({ state }: stateType) => {
  // calculate the ItemsPrice

  const ItemsPrice = state.cartItems.reduce((accumulator, item): number => {
    return accumulator + item.price * item.qty;
  }, 0);

  state.itemsPrice = Number(addDecimals(ItemsPrice));
  console.log(" this is the price of the items : ", state.itemsPrice);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
