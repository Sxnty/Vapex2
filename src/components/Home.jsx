import React from "react";
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
          <p className="info__catalogue">Catalogue</p>
        </div>
      </main>
      <FeaturedProducts />
    </>
  );
}

export default Home;
