import React from "react";
import { CATEGORIES } from "../assets";

const Categories = () => {
  return (
    <div className="flex justify-between px-20 items-center h-40">
      {CATEGORIES.map((item, index) => (
        <div key={index} className="relative w-[18%] ">
          <img src={item.img} alt={item.title} className="w-full" />
          <div className="absolute top-0 left-0 flex justify-center text-lg font-semibold text-white items-center w-full h-full">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
