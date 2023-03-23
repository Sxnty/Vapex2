import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";
import FeaturedProducts from "./FeaturedProducts";

function Home() {
  return (
    <>
      <main className="hero">
        <div className="hero__info">
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iste
            autem deleniti quae fugit incidunt.
          </p>
          <Link to="/catalogue">
            <button className="info__catalogue">Catalogue</button>
          </Link>
        </div>
      </main>
      <FeaturedProducts />
    </>
  );
}

export default Home;
