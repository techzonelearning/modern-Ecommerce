import React from "react";
import { TopProduct } from "../assets/admin";
import { Link } from "react-router-dom";

const TopProducts = () => {
  return (
    <div className="bg-white p-4 w-1/2 rounded-xl shadow-md">
      <div className="flex mb-4 items-center justify-between">
        <h1 className="text-2xl font-bold">Top Products</h1>
        <Link className="text-gray-600 text-lg underline" to="/product-list">
          View All
        </Link>
      </div>
      {TopProduct.map((item, index) => (
        <div className="flex px-10 items-center my-4 justify-between" key={index}>
          <img src={item.img} className="size-10" alt="" />
          <div className="flex flex-col">
            <p className="text-base font-semibold">{item.title}</p>
            <p className="text-gray-600 text-md">{item.quantity}</p>
          </div>
          <div>
            <p className="text-md font-medium">Coupon Code</p>
            <p className="text-gray-500 text-center text-sm">Sflat</p>
          </div>
          <p>{item.country}</p>
        </div>
      ))}
    </div>
  );
};

export default TopProducts;
