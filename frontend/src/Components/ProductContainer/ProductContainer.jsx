import React, { useContext } from "react";
import Product from "../Product/Product";
import "./ProductContainer.css";
import { StoreContext } from "../../context/storeContext.jsx";

const getImageSrc = (image) => {
  if (!image || !image.data || !image.data.data || !image.contentType)
    return "";

  try {
    const byteArray = new Uint8Array(image.data.data);
    const base64String = window.btoa(
      byteArray.reduce((data, byte) => data + String.fromCharCode(byte), "")
    );
    return `data:${image.contentType};base64,${base64String}`;
  } catch (err) {
    console.error("Error converting image buffer to base64:", err);
    return "";
  }
};

const ProductContainer = () => {
  const { product_List } = useContext(StoreContext);

  if (!Array.isArray(product_List)) {
    return <div>Loading products...</div>;
  }
  return (
    <div className="ProductContainer">
      <h2 className="ProductContainerh">Dairy Products</h2>
      <div className="ProductContainer_header_1">
        {product_List.map((product) => (
          <Product
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            discountedPrice={product.discountedPrice}
            category={product.category}
            stock={product.stock}
            image={getImageSrc(product.image)}
          />
        ))}
      </div>
      <h2 className="ProductContainerh">Cosmetics</h2>
      <div className="ProductContainer_header_2">
        {product_List?.map((product) => (
          <Product
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            discountedPrice={product.discountedPrice}
            category={product.category}
            stock={product.stock}
            image={product.image}
          />
        ))}
      </div>
      <h2 className="ProductContainerh">Snacks</h2>
      <div className="ProductContainer_header_3">
        {product_List?.map((product) => (
          <Product
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            discountedPrice={product.discountedPrice}
            category={product.category}
            stock={product.stock}
            image={product.image}
          />
        ))}
      </div>
      <h2 className="ProductContainerh">Stationary</h2>
      <div className="ProductContainer_header_4">
        {product_List?.map((product) => (
          <Product
            key={product._id}
            name={product.name}
            description={product.description}
            price={product.price}
            discountedPrice={product.discountedPrice}
            category={product.category}
            stock={product.stock}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
