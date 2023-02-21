import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";
import loadingImg from "../images/circle.gif";
const Products = () => {
  const { products, loading } = useContext(ProductContext);

  // get only men's and woman's products
  const filteredProducts = products.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );
  return (
    <div className="products">
      <h1 className="text-center text-2xl py-4">All Products</h1>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <img src={loadingImg} alt="" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
