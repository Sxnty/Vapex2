import React, { useContext, useEffect, useState } from "react";
import "../styles/navbar.scss";
import { IoCartOutline, IoRemoveCircleOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  let { cartProducts, setCartProducts } = useContext(CartContext);
  let [quantity, setQuantity] = useState(0);
  let [showCart, setShowCart] = useState(false);
  let { userLoged, logOut } = useContext(AuthContext);
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
    const totalQuantity = cartProducts.reduce((accumulator, item) => {
      return accumulator + item.amount;
    }, initialValue);
    setQuantity(totalQuantity);
  }, [cartProducts]);
  return (
    <>
      <header className="header">
        <Link to="/">
          <h1>Vapex</h1>
        </Link>
        <div className="header__left">
          <ul className="menu">
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
                        >
                          {" "}
                          Eliminar{" "}
                        </IoRemoveCircleOutline>
                      </div>
                    </div>
                  );
                })}
                <Link to="/checkout">
                  <button>Checkout</button>
                </Link>
              </div>
            ) : null}
            {!userLoged ? (
              <>
                <Link to="/login">
                  <li className="menu__login">Login</li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/orders">
                  <li>My orders</li>
                </Link>
                <Link to="/">
                  <li className="menu__login" onClick={logOut}>
                    LogOut
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
