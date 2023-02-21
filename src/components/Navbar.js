import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { BiShoppingBag } from "react-icons/bi";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { totalItem } = useContext(CartContext);
  return (
    <div className="header text-white bg-cyan-700 py-5">
      <nav className="container mx-auto flex justify-between">
        <div className="logo"><Link to="/">rodite</Link></div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="relative">
            <BiShoppingBag className="text-3xl" />
            <span className="text-sm absolute top-0 -right-1 bg-red-400 w-5 h-5 flex items-center justify-center rounded-full">
              {totalItem}
            </span>
          </span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
