import React from "react";

import { Link } from "react-router-dom";

const Card2 = ({ product1 }) => {
  return (
    <div className="flex mt-10 justify-between md:px-20">
      <div className="w-full flex flex-wrap">
        {product1.map((item, index) => (
          <Link
            className="lg:w-[23%] md:w-[48%] sm:h-[300px] mx-auto h-[350px] "
            key={index}
            to={`/item/${item.id}`}
            onClick={() => scrollTo(0, 0)}
          >
            <img src={item.images[0]} className="h-[70%] w-full" alt="" />
            <h2 className="text-base text-gray-500 font-semibold mt-2">
              {item.title}
            </h2>
            <p className="text-base font-semibold">{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card2;
