import React from "react";
import '../styles/card.scss'
import {IoCartOutline} from "react-icons/io5";
import

function ProductCard({ featured }) {
  return (
    <div className="card__container">
      {featured.map((e) => {
        return (
          <div className="card__product">
            <img src={e.img} alt={e.name} />
            <h3>{e.name}</h3>
            <p>${e.price}</p>
            <button>Add to cart <IoCartOutline/></button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
