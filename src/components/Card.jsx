import React from "react";
import { assets } from "../assets";
import { Link } from "react-router-dom";

const Card = ({ product1, info }) => {
  return (
    <div className="flex mt-10 justify-between px-20">
      <div className="relative w-[20%] h-[350px] ">
        <img className="w-full h-full" src={info.img} alt="" />
        <div className="absolute bottom-5 left-0 pl-5">
          <p className="text-sm font-medium">{info.info}</p>
          <h1 className="text-3xl my-2 font-bold text-black">{info.title}</h1>
          <p className="text-sm italic">{info.description}</p>
        </div>
      </div>
      <div className="w-3/4 flex justify-between">
        {product1.map((item, index) => (
          <Link
          onClick={()=>scrollTo(0,0)}
            key={index}
            to={`/item/${item.id}`}
            className="w-[22%] h-[350px] "
          >
            <img src={item.img} className="h-[70%] w-full" alt="" />
            <h2 className="text-base text-gray-500 font-semibold mt-2">
              {item.title}
            </h2>
            <div>
              <p className="text-base font-semibold">{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
