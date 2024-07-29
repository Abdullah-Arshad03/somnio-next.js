"use client";
import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import CartItemRow from "./CartItemRow";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { cartItem } from "../util/cartItem";
import { useRouter } from "next/navigation";

const Navbar = lazy(() => import("../components/Navbar/Navbar"));
const CartPage = () => {
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart);
  console.log("this is the cart in the cart", cart);
  return (
    <div>
      <Suspense fallback={<div>Navbar Loading...</div>}>
        <Navbar home={false} />
      </Suspense>
      <div className="main-cart-container flex justify-center w-100 h-[100vh] items-start pt-44 bg-[#F2F3F4]">
        <div className="cart flex gap-6 justify-center flex-col bg-[#FFFFFF ] ">
          <div className="cart-heading text-2xl">Tu Carrito</div>
          <div className="cart-items w-[800px] h-auto bg-white p-5 rounded-lg">
            {cart &&
              cart.cartItems.map((items: cartItem) => (
                <CartItemRow
                  qty={items.qty}
                  itemName={items.title}
                  itemsPrice={items.qty * items.price}
                />
              ))}
          </div>
          <div className="continue-shopping-btn flex justify-center mt-3">
            <button
              onClick={() => router.push("/")}
              className="bg-[#8f84d6] p-4 rounded-lg text-white drop-shadow-xl"
            >
              SEGUIR COMPRANDO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
