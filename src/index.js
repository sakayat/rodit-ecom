import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { SidebarProvider } from "./context/SidebarContext";
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <ProductProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
