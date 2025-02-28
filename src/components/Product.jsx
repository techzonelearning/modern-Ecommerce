import React from "react";
import Card from "./Card";
import { productInfo, products1 } from "../assets";

const Product = () => {
  return (
    <div>
      <Card product1={products1.slice(0, 4)} info={productInfo[0]} />
      <Card product1={products1.slice(4, 8)} info={productInfo[1]} />
    </div>
  );
};

export default Product;
