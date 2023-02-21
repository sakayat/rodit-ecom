import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  const removerCart = (id) => {
    const existItem = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(existItem);
  };
  const clearCart = () => {
    setCart([]);
  };
  const incrementCart = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  const discreateCart = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item
      );
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removerCart(id);
    }
  };
  const totalAmount = cart.reduce((acc, item) => {
    return acc + item.amount * item.price
  }, 0);
  const totalItem = cart.reduce((acc,item) => {
    return acc + item.amount;
  },0)

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removerCart,
        clearCart,
        incrementCart,
        discreateCart,
        totalAmount,
        totalItem,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
