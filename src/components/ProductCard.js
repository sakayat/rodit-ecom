import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { currencyFormate } from "../utils/currencyFormate";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const {addToCart} = useContext(CartContext)
  return (
    <div className="product-info flex flex-col gap-7 group relative overflow-hidden cursor-pointer py-12">
      <div className="flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-32 h-48 hover:scale-110 transition duration-300 transform translate-x-4"
        />
      </div>
      <div className="button flex flex-col gap-2 absolute top-0 right-0 opacity-0  group-hover:opacity-100 transition-all duration-300">
        <button onClick={() => addToCart(product,product.id)} className="bg-slate-800 text-white p-3">
          <BsPlusLg />
        </button>
        <Link to={`/product/${product.id}`} className="bg-red-400 block p-3">
          <AiOutlineEye />
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-xl truncate">{product.title}</h3>
        <p className="text-sm text-gray-600 truncate">{product.description}</p>
        <p className="text-sm">{currencyFormate(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
