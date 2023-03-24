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
import Checkout from "./components/Checkout";
import { AuthProvider } from "./context/AuthContext";
import Auth from "./components/Auth";
import Login from "./components/Login";
import Orders from "./components/Orders";
import { OrdersProvider } from "./context/OrdersContext";
function App() {
  return (
    <>
      <AuthProvider>
        <ProductsProvider>
          <CartProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Home />
                  </>
                }
              />
              <Route
                path="/item/:id"
                element={
                  <>
                    <Navbar />
                    <ProductDetail />
                  </>
                }
              />
              <Route
                path="/catalogue"
                element={
                  <>
                    <Navbar />
                    <Catalogue />
                  </>
                }
              />
              <Route
                path="/catalogue/:category"
                element={
                  <>
                    <Navbar />
                    <Catalogue />
                  </>
                }
              />
              <Route
                path="/checkout"
                element={
                  <>
                    <Navbar />
                    <Auth>
                      <Checkout />
                    </Auth>
                  </>
                }
              />
              <Route
                path="/orders"
                element={
                  <>
                    <OrdersProvider>
                      <Navbar />
                      <Auth>
                        <Orders />
                      </Auth>
                    </OrdersProvider>
                  </>
                }
              />
            </Routes>
          </CartProvider>
        </ProductsProvider>
      </AuthProvider>
    </>
  );
}

export default App;
