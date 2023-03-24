import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/Products";
import { CartContext } from "../context/CartContext";
import {
  IoCartOutline,
  IoAddCircleOutline,
  IoRemoveCircleOutline,
} from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import "../styles/productDetail.scss";

function ProductDetail() {
  let [counter, setCounter] = useState(1);
  let { id } = useParams();

  let { products } = useContext(ProductsContext);
  let { cartProducts, setCartProducts } = useContext(CartContext);
  let thisProduct = products.filter((element) => element.id === id);

  const addToCart = (e) => {
    e.preventDefault();
    const existingItemIndex = cartProducts.findIndex(
      (item) => item.id === thisProduct[0].id
    );
    if (existingItemIndex !== -1) {
      // El producto ya existe en el carrito, actualizamos su cantidad
      let updatedCartProducts = [...cartProducts];
      updatedCartProducts[existingItemIndex].amount += counter;
      setCartProducts(updatedCartProducts);
    } else {
      // El producto no existe en el carrito, lo añadimos
      const newCartItem = {
        name: thisProduct[0].name,
        id: thisProduct[0].id,
        price: thisProduct[0].price,
        img: thisProduct[0].img,
        amount: counter,
      };
      setCartProducts([...cartProducts, newCartItem]);
    }
  };
  const addCounter = () => {
    if (counter >= thisProduct[0].stock) {
      toast.error("No hay suficiente stock para tantos productos");
    } else {
      setCounter(counter + 1);
    }
  };
  const substractCounter = () => {
    if (counter <= 1) {
      toast.error("No puedes añadir menos de un producto al carrito");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      {thisProduct.map(
        ({ description, category, img, id, name, price, stock }) => {
          return (
            <section className="product__detail" key={id}>
              <div className="detail__left">
                <img src={img} alt={name} />
                <h2>Informacion:</h2>
                <span>Categoria: {category}</span>
                <p>{description}</p>
              </div>
              <div className="detail__info">
                <h2>{name}</h2>
                <div className="info__numbers">
                  <p>
                    Price: <span className="info__price">${price}</span>
                  </p>
                  <p>
                    Stock: {stock}
                    {stock < 10 ? <span> ultimas unidades!</span> : null}
                  </p>
                </div>
                <div className="info__cart">
                  <button
                    onClick={(e) => {
                      addToCart(e, id);
                    }}
                  >
                    Add to cart <IoCartOutline />
                  </button>
                  <div className="cart__amount">
                    <IoAddCircleOutline onClick={addCounter} />
                    <span>{counter}</span>
                    <IoRemoveCircleOutline onClick={substractCounter} />
                  </div>
                </div>
              </div>
              <Toaster />
            </section>
          );
        }
      )}
    </>
  );
}

export default ProductDetail;
