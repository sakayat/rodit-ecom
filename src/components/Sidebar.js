import React, { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { BsArrowRight } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { currencyFormate } from "../utils/currencyFormate";
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, totalAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } bg-white fixed top-0 w-full h-full md:w-[35vw] xl:max-w-[25vw] shadow-xl transition-all duration-300 px-4 z-20`}
    >
      <div className="flex items-center justify-between border-b py-5 mb-5">
        <span className="uppercase">shopping bag {cart.length}</span>
        <button onClick={handleClose}>
          <BsArrowRight />
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="total-price flex justify-between py-4">
        {cart.length > 0 && (
          <>
            <span>
              Total Price: <span>{currencyFormate(totalAmount)}</span>
            </span>
            <button onClick={clearCart}>Clear Cart</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
