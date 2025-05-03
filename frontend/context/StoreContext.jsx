import axios from "axios";
import { createContext, useState, useEffect } from "react";
import React from "react";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [product_List, setProductList] = useState([]);

  const fetch_Product_List = async () => {
    const response = await axios.get(
      "http://localhost:8888/api/adminPanel/productFetch"
    );
    console.log(response);
    setProductList(response.data.products);
  };

  useEffect(() => {
    fetch_Product_List();
  }, []);

  const contextValue = {
    product_List,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
