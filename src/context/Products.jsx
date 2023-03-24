import React, { createContext, useEffect, useState, useContext } from "react";
import Loading from "../components/Loading";
import { getProducts } from "../firestore_api";
import { AuthContext } from "./AuthContext";

export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
    
  const { setUserLoading, userLoading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const prueba = async () => {
      let result = await getProducts();
      setProducts(result);
    };
    prueba();
    setUserLoading(false);
  }, []);
  if (userLoading) {
    return <Loading />;
  }
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
