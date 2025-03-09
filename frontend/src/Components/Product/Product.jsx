import React from "react";
import "./Product.css";
import groceryimage from "../../assets/Images/grocery.jpeg";
const Product = () => {
  return (
    <div className="Product_item">
      <div className="Product_item_img_container">
        <img src={groceryimage} alt="id" />
      </div>
      <div className="Product_item_description">
        <div className="name">name</div>
        <div className="price">price</div>
        <p className="quantity">x</p>
      </div>
    </div>
  );
};

export default Product;
