import React from "react";
import Product from "../Product/Product";
import "./ProductContainer.css";
const ProductContainer = () => {
  return (
    <div className="ProductContainer">
    <h2 className="ProductContainerh">Dairy Products</h2>
      <div className="ProductContainer_header_1">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      </div>
      <h2 className="ProductContainerh">Cosmetics</h2>
      <div className="ProductContainer_header_2" >
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      </div>
      <h2 className="ProductContainerh">Snacks</h2>
      <div className="ProductContainer_header_3"> 
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      </div>
      <h2 className="ProductContainerh">Stationary</h2>
      <div className="ProductContainer_header_4"> 
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      </div>
    </div>
  );
};

export default ProductContainer;
