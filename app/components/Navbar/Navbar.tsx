"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { BiSolidCart } from "react-icons/bi";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { cartItem } from "@/app/util/cartItem";

interface NavbarProps {
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  home: boolean;
}
const Navbar = ({ searchTerm, setSearchTerm, home }: NavbarProps) => {
  const cart = useSelector((state: RootState) => state.cart);
  console.log("this is the cart", cart);

  return (
    <div className="navbar flex justify-between bg-[#bac1df] items-center py-1 px-5">
      <Link href="/">
        {" "}
        <div className="logo">
          <Logo />
        </div>
      </Link>
      {home && (
        <div className="search-bar">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      )}
      <div className="cart-icon">
        <Link href="/cart" className="relative">
          <BiSolidCart size={50} color="white" />
          {cart && (
            <span className="inline-flex items-center justify-center w-4 p-3 h-4 absolute top-8 right-9  border-2 border-gray-500  text-sm font-bold  text-gray-800 bg-gray-400 rounded-full">
              <p>
                {" "}
                {cart.cartItems.reduce(
                  (a: number, c: cartItem) => a + c.qty,
                  0
                )}
              </p>
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
