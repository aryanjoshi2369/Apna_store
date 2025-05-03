import React from "react";
import "./Product.css";

const Product = ({
  name,
  description,
  price,
  discountedPrice,
  category,
  stock,
  image,
}) => {
  return (
    <div className="Product_item">
      <div className="Product_item_img_container">
        <img src={image} alt={name} />
      </div>

      <div className="Product_name">Name: {name}</div>
      <div className="Product_description">Description: {description}</div>
      <div className="Product_price">Price: ₹{price}</div>
      <div className="Product_discounted_price">
        Discounted Price: ₹{discountedPrice}
      </div>
      <div className="Product_category">Category: {category}</div>
      <div className="Product_stock">Stock: {stock}</div>
    </div>
  );
};

export default Product;
