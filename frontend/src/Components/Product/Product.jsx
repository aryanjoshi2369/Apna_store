import React from "react";
import "./Product.css";
import groceryimage from "../../assets/Images/grocery.jpeg";
const Product = (p) => {
  return (
    <div className="Product_item">
      <div className="Product_item_img_container">
        <img src={groceryimage} alt="id" />
      </div>
      <div className="Product_item_description">
        <div className="name">{p.name}</div>
        <p className="quantity">{p.quantity}</p>
        <div className="price">
            <p className="pr">{p.price}</p>
            <button className="btn-4">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
