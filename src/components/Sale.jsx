import React from "react";
import { assets, sale } from "../assets";

const Sale = () => {
  return (
    <div className="flex justify-between items-center w-full px-20 my-20">
      {sale.map((item, index) => (
        <div key={index} className="relative">
          <img src={item.img} alt="" className="w-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white">{item.title}</h1>
            <p className="text-lg text-white">{item.info}</p>
         
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sale;
