import React, { useState } from "react";
import logo from "../../assets/Images/logo.png";
import cart from "../../assets/Images/shopping-cart.png";
import shop from "../../assets/Images/shop.png";
import user from "../../assets/Images/user.png";
import { IoSearchOutline } from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_act">
        <img src={logo} alt="logo" className="logo" />

        <div className="searchbar">
          <IoSearchOutline className="search_img" />
          <input type="text" placeholder="Search products" />
        </div>

        <div className="navbar-right">
          <div className="cart">
            <img src={cart} alt="cart" className="cart" />
            <span className="cart_text">Cart</span>
          </div>

          <div className="login">
            <img src={user} alt="shop" className="login" />
            <span className="login_text">Login</span>
          </div>

          <div className="seller_op">
            <img src={shop} alt="shop" className="seller_op" />
            <span className="seller_text">Become a Seller</span>
          </div>
        </div>
      </div>
      <div className="searchbar_mob_d">
        <div className="searchbar_mob">
          <IoSearchOutline className="search_img_mob" />
          <input
            type="text"
            placeholder="Search products"
            className="searchbar_mod_input"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
