import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { currencyFormate } from "../utils/currencyFormate";
import { CartContext } from "../context/CartContext";
const CartItem = ({ item }) => {
    const { removerCart, incrementCart, discreateCart } = useContext(CartContext)
  return (
    <div className="flex items-center justify-between border-b pb-2 gap-5">
      <div className="flex items-center gap-5">
      <Link to={`/product/${item.id}`}>
          <img className="max-w-[30px]" src={item.image} alt={item.title} />
        </Link>
        <div className="flex flex-col gap-3">
        <Link to={`/product/${item.id}`}>
          <span>{item.title}</span>
        </Link>
        <div className="flex gap-5">
          <div className="product-price">{currencyFormate(item.price)}</div>
          <div className="flex items-center gap-2">
          <button onClick={() => discreateCart(item.id)}>
              <AiOutlineMinus />
            </button>
            <span>{item.amount}</span>
            <button onClick={() => incrementCart(item.id)}>
              <AiOutlinePlus />
            </button>
          </div>
          <div className="total-price">
            <span>{currencyFormate(item.price * item.amount)}</span>
          </div>
        </div>
        </div>
      </div>
      <div className="remove-btn">
        <button onClick={() => removerCart(item.id)} className="text-2xl">
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
