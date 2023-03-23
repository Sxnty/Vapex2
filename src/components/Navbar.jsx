import React from "react";
import "../styles/navbar.scss";

function Navbar() {
  return (
    <>
      <header className="header">
        <h1>Vapex</h1>
        <div className="header__left">
            <ul className="menu">
                <li>My orders</li>
                <li>carrito</li>
                <li className="menu__login">Login</li>
            </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
