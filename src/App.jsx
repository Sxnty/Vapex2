import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./styles/variables.scss";
import "./styles/reset.scss";
import { ProductsProvider } from "./context/Products";
import { CartProvider } from "./context/CartContext";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import { Catalogue } from "./components/Catalogue";
function App() {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item/:id" element={<ProductDetail />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/catalogue/:category" element={<Catalogue />} />

          </Routes>
        </CartProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
