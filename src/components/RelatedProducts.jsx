import React, { useContext } from "react";
import { product } from "../context/ProductContext";
import Card2 from "./Card2";


const RelatedProducts = ({ category, subCategory }) => {
  let { getProducts } = useContext(product);
  let relatedProduct = getProducts.filter(
    (item) => item.category == category && item.subCategory == subCategory
  );
  return (
    <>
      <h1 className="text-2xl mt-10 font-bold text-center">Related Product</h1>
      <Card2 product1={relatedProduct.slice(0, 4)} />
    </>
  );
};

export default RelatedProducts;
