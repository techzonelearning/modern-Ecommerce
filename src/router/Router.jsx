import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import Elements from "../pages/Elements";
import Accessories from "../pages/Accessories";
import BuyNow from "../pages/BuyNow";
import Cart from "../pages/Cart";
import Pages from "../pages/Pages";
import ProductDescription from "../pages/ProductDescription";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Dashboard";
import ProductList from "../pages/ProductList";
import AddProduct from "../pages/AddProduct";
import PageNotFound from "../pages/PageNotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product" element={<Product />} />
      <Route path="/elements" element={<Elements />} />
      <Route path="/acessories" element={<Accessories />} />
      <Route path="/buynow" element={<BuyNow />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/item/:id" element={<ProductDescription />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="*" element={<PageNotFound />} />

    </Routes>
  );
};

export default Router;
