import React, { useContext, useEffect, useState } from "react";
import "../styles/navbar.scss";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
function Navbar() {
  let { cartProducts } = useContext(CartContext);
  console.log(cartProducts, 'navbar')
  let [quantity, setQuantity] = useState(0);
  const initialValue = 0;
  useEffect(() => {
    console.log(cartProducts)
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
            <li>
              <IoCartOutline /> {quantity}
            </li>
            <li className="menu__login">Login</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
