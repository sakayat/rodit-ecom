import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
    <Navbar />
    <Sidebar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
     </Routes>
    </>
  );
};

export default App;
