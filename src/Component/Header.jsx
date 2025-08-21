import React from "react";
import "../Component/HomeHeader.css";
import { Link } from "react-router";

const Header = ({cart}) => {
  const totalQuantity = cart.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0); // The '0' is the starting value for the total.
  
  return (
    <>
      <div className="header ">
        <div className="left-section">
         <Link to="/" className="header-link">
            <img className="logo" src="images/logo.png" />
            <img className="mobile-logo" src="images/mobile-logo.png" />
          </Link>
        </div>

        <div className="middle-section ">
          <input
            className="search-bar bg-white text-dark"
            type="text"
            placeholder="Search"
          />

          <button className="search-button grid place-items-center sm-border-l-0">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
         <Link className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </Link>

         <Link className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
