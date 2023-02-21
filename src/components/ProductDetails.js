import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import { currencyFormate } from "../utils/currencyFormate";
const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const item = products.find((product) => product.id === parseInt(id));
  console.log(item);
  if (!item) {
    return <h1>Product not found</h1>;
  }
  return (
    <div className="product container mx-auto flex items-center gap-20 lg:max-w-5xl min-h-[90vh] py-8">
      <div className="img">
        <img src={item.image} alt="" />
      </div>
      <div className="flex flex-col items-start gap-5">
        <h1 className="text-4xl">{item.title}</h1>
        <p className="text-gray-500">{item.description}</p>
        <p className="text-red-400">{currencyFormate(item.price)}</p>
        <div className="flex items-center gap-5">
          <button>
            <AiOutlineMinus />
          </button>
          <span>1</span>
          <button>
            <AiOutlinePlus />
          </button>
        </div>
        <button className=" bg-red-400 text-white py-2 px-4">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
