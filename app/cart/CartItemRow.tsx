import React from "react";

interface CartItemRowProps {
  qty: number;
  itemName: string;
  itemsPrice: number;
}
const CartItemRow = ({ qty, itemName, itemsPrice }: CartItemRowProps) => {
  return (
    <div className="flex justify-between p-4 border-b">
      <div className="flex gap-5">
        <span>{qty}</span>
        <span>{itemName}</span>
      </div>
      <div>{itemsPrice}</div>
    </div>
  );
};

export default CartItemRow;
