import { CartState } from "../redux/slices/cartSlice";

export const addDecimals = (num: number): string => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = ({ cartItems, itemsPrice }: CartState) => {
  const ItemsPrice = cartItems.reduce((accumulator, item): number => {
    return accumulator + item.price * item.qty;
  }, 0);

  itemsPrice = Number(addDecimals(ItemsPrice));
  console.log(" this is the price of the items : ", itemsPrice);

  localStorage.setItem("cart", JSON.stringify({ cartItems, itemsPrice }));

  return { cartItems, itemsPrice };
};
