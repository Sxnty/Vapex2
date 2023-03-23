import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./styles/variables.scss";
import "./styles/reset.scss";
import { ProductsProvider } from "./context/Products";
function App() {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <Home />
      </ProductsProvider>
    </>
  );
}

export default App;
