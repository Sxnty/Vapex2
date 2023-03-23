import React from "react";
import "../styles/card.scss";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function ProductCard({ featured }) {
  return (
    <div className="card__container">
      {featured.map((e) => {
        return (
          <Link to={`/item/${e.id}`}>
            <div className="card__product">
              <img src={e.img} alt={e.name} />
              <h3>{e.name}</h3>
              <p>${e.price}</p>
              <button>
                Add to cart <IoCartOutline />
              </button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductCard;
