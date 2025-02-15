import React, { useState } from "react";
import logo from "../../assets/Images/logo.png";
import cart from "../../assets/Images/shopping-cart.png";
import shop from "../../assets/Images/shop.png";
import user from "../../assets/Images/user.png";

import "./Navbar.css";

const Navbar = () => {

   
   

  const [searchWidth, setSearchWidth] = useState(160);

  const handleInput = (e) => {
    const length = e.target.value.length;
    let newWidth = 160; // Default width

    if (length > 10) {
      // Expands after 10 characters
      newWidth = Math.min(160 + length * 5, 400); // Expands up to 400px
    }

    setSearchWidth(newWidth);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="searchbar" style={{ width: `${searchWidth}px` }}>
        <input type="text" onInput={handleInput} />
      </div>

      <div className="navbar-right">
        <div className="cart">
          <img src={cart} alt="cart" className="cart" />
          <span className="cart_text">Cart</span>
        </div>
        <div className="seller_op">
          <img src={shop} alt="shop" className="seller_op" />
          <span className="seller_text">Become a Seller</span>
        </div>
        <div className="login">
          <img src={user} alt="shop" className="login" />
          <span className="login_text">Login</span>
        </div>
      </div>
    </div>


  );
};

export default Navbar;
