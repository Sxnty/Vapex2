import React, { useContext } from "react";
import { ProductsContext } from "../context/Products";
import ProductCard from "./ProductCard";
import "../styles/featured.scss";

function FeaturedProducts() {
  let { products } = useContext(ProductsContext);
  let featuredFilter = products.filter((e) => e.featured);
  console.log(products, "todos");
  console.log(featuredFilter, "filtrados");
  return (
    <section className="featured__products">
      <div className="featured__heading">
        <h2>Featured Products</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <ProductCard featured={featuredFilter} />
    </section>
  );
}

export default FeaturedProducts;
