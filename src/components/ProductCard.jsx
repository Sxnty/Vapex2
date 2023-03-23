import React, { useContext } from "react";
import "../styles/card.scss";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/Products";

function ProductCard({ featured }) {
  let { setCartProducts, cartProducts } = useContext(CartContext);
  let { products } = useContext(ProductsContext);

  const addToCart = (e, id) => {
  let thisProduct = products.filter((element) => element.id === id);

    e.preventDefault();
    const existingItemIndex = cartProducts.findIndex(
      (item) => item.id === thisProduct[0].id
    );
    if (existingItemIndex !== -1) {
      // El producto ya existe en el carrito, actualizamos su cantidad
      let updatedCartProducts = [...cartProducts];
      updatedCartProducts[existingItemIndex].amount += 1;
      setCartProducts(updatedCartProducts);
    } else {
      // El producto no existe en el carrito, lo añadimos
      const newCartItem = {
        name: thisProduct[0].name,
        id: thisProduct[0].id,
        title: thisProduct[0].title,
        price: thisProduct[0].price,
        img: thisProduct[0].img,
        amount: 1,
      };
      setCartProducts([...cartProducts, newCartItem]);
    }
  };

  return (
    <div className="card__container">
      {featured.map(({ id, img, name, price }) => {
        return (
          <Link to={`/item/${id}`} key={id}>
            <div className="card__product">
              <img src={img} alt={name} />
              <h3>{name}</h3>
              <p>${price}</p>
              <button
                onClick={(e) => {
                  addToCart(e, id);
                }}
              >
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
