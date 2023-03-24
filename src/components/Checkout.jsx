import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.scss";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { addOrder } from "../firestore_api";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import moment from 'moment';

const Checkout = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const { userLoged } = useContext(AuthContext);
  let [totalPrice, setTotalPrice] = useState(0);

  const removeProductFromCart = (id) => {
    const updatedCartProducts = cartProducts.filter(
      (product) => product.id != id
    );
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
    setCartProducts(updatedCartProducts);
  };
  let initialValue = 0;
  useEffect(() => {
    const totalQuantity = cartProducts.reduce((accumulator, item) => {
      return accumulator + item.price * item.amount;
    }, initialValue);
    setTotalPrice(totalQuantity);
    console.log(totalQuantity, "cantidad");
  }, [cartProducts]);

  return (
    <>
      <section className="checkout">
        <div className="checkout__heading">
          <h2>Productos</h2>
          <p>Listado de los productos que añadiste al carrito</p>
        </div>
        <div className="checkout__container">
          <div className="checkout__products">
            {cartProducts.map(({ img, name, price, amount, id }) => {
              return (
                <div className="checkout__product" key={id}>
                  <img src={img} alt={name} />
                  <h2>{name}</h2>
                  <p>Precio: ${price * amount}</p>
                  <p>Cantidad: {amount}</p>
                  <div
                    className="checkout__delete"
                    onClick={() => {
                      removeProductFromCart(id);
                    }}
                  >
                    <IoRemoveCircleOutline />
                    <p>Eliminar</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="checkout__info">
            <h2>Informacion de comprador:</h2>
            <h3>Email:</h3>
            <p>{userLoged.email}</p>
            <h3>Nombre:</h3>
            <p>{userLoged.displayName}</p>
            <h3>
              Precio total: <span>{totalPrice}</span>{" "}
            </h3>

            <div className="info__bottom">
              <h4>Retiro en sucursal </h4>
              <Link to='/orders'>
                <button
                  onClick={() => {
                    addOrder(cartProducts, totalPrice, userLoged.uid, moment().format('DD/MM/YYYY'));
                  }}
                >
                  Comprar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
