import React, { ReactNode } from "react";

interface cartProps {
  children: ReactNode;
}
const CartLayout = ({ children }: cartProps) => {
  return <div>{children}</div>;
};

export default CartLayout;
