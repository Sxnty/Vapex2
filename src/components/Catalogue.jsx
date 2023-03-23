import React, { useContext } from "react";
import { ProductsContext } from "../context/Products";
import ProductCard from "./ProductCard";
import "../styles/catalogue.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const Catalogue = () => {
  const { products } = useContext(ProductsContext);
  const { category } = useParams();
  let catFilter = products;
  if (category != null) {
    catFilter = products.filter((element) => element.category === category);
    console.log("no es nulo");
  }

  return (
    <>
      <section className="catalogue">
        <div className="catalogue__heading">
          <h2>Coleccion</h2>
          <div className="heading__filters">
            <Link to="/catalogue/rechargeable">
              <button className={category === "rechargeable" ? "active" : null}>
                Recargables
              </button>
            </Link>
            <Link to="/catalogue/disposable">
              <button className={category === "disposable" ? "active" : null}>
                Desechables
              </button>
            </Link>
          </div>
        </div>
        <div className="catalogue__products">
          <ProductCard featured={catFilter} />
        </div>
      </section>
    </>
  );
};
