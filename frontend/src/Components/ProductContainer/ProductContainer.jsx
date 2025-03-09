import React from "react";
import Product from "../Product/Product";
import "./ProductContainer.css";
const ProductContainer = () => {
  return (
    <div className="ProductContainer">
      <div className="ProductContainer_header_1">Dairy products</div>
      <Product />
      <div className="ProductContainer_header_2">Cosmetics</div>
      <Product />
      <div className="ProductContainer_header_3">Snacks</div>
      <Product />
      <div className="ProductContainer_header_4">Stationary</div>
      <Product />
    </div>
  );
};

export default ProductContainer;
