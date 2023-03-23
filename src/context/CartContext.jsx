import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if(!cartProducts.length && localStorage.getItem("cartProducts")) {
      setCartProducts(JSON.parse(localStorage.getItem("cartProducts")));
    } else if(cartProducts.length) {
     localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }
   }, [cartProducts]);

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};
