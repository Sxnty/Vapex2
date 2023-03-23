import React, { useContext, useEffect, useState } from "react";
import "../styles/navbar.scss";
import { IoCartOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

function Navbar() {
  let { cartProducts, setCartProducts } = useContext(CartContext);
  let [quantity, setQuantity] = useState(0);
  let [showCart, setShowCart] = useState(false);

  const initialValue = 0;

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const removeProductFromCart = (id) => {
    const updatedCartProducts = cartProducts.filter(
      (product) => product.id != id
    );
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
    setCartProducts(updatedCartProducts);
  };

  useEffect(() => {
    console.log(cartProducts);
    const totalQuantity = cartProducts.reduce((accumulator, item) => {
      return accumulator + item.amount;
    }, initialValue);
    console.log(totalQuantity);
    setQuantity(totalQuantity);
  }, [cartProducts]);
  return (
    <>
      <header className="header">
        <h1>Vapex</h1>
        <div className="header__left">
          <ul className="menu">
            <li>My orders</li>
            <li
              className={quantity > 0 ? "header__cart" : null}
              onClick={toggleCart}
            >
              <IoCartOutline /> {quantity}
            </li>
            {showCart && cartProducts.length > 0 ? (
              <div className="cart__info">
                {cartProducts.map((e) => {
                  return (
                    <div className="info__product" key={e.id}>
                     <div className="product__preview">
                     <img src={e.img} alt={e.name} />
                      <h2>{e.name}</h2>
                     </div>
                      <div className="product__info">
                        <span>Cantidad: {e.amount}</span>
                        <IoRemoveCircleOutline
                          onClick={() => {
                            removeProductFromCart(e.id);
                          }}
                        > Eliminar </IoRemoveCircleOutline>
                      </div>
                    </div>
                  );
                })}
                <button>Checkout</button>
              </div>
            ) : null}
            <li className="menu__login">Login</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
