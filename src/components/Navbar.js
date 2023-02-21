import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { BiShoppingBag } from "react-icons/bi";
const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className="header bg-[#d39b59] text-white py-8">
      <nav className="container mx-auto flex justify-between">
        <div className="logo">rodite</div>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="text-2xl"><BiShoppingBag /></span>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
