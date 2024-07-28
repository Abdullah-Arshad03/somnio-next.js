import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { BiSolidCart } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className=" navbar flex justify-between bg-[#bac1df] items-center py-1 px-5 ">
        <div className="logo">
          <Logo />
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
        <div className="cart-icon">
          <Link href="/cart">
            {" "}
            <BiSolidCart size={50} color="white" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
