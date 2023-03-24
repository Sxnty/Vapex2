import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (!cartProducts.length && localStorage.getItem("cartProducts")) {
      setCartProducts(JSON.parse(localStorage.getItem("cartProducts")));
    } else if (cartProducts.length > 0) {
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }
    if (cartProducts.length <= 0) {
      localStorage.removeItem("cartProducts");
    }
  }, [cartProducts]);

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};
