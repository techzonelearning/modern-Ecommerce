import React from "react";
import { serives } from "../assets";

const Services = () => {
  return (
    <div className="flex md:px-20 px-10  justify-between flex-wrap items-center">
      {
        serives.map((item,index)=>(
            <div key={index} className="py-9 px-6 md:w-[22%] sm:w-1/2 flex ">
        <item.icon size={50} />
        <div className="ml-3">
          <h1 className="font-semibold">{item.title}</h1>
          <p className="text-sm text-gray-600">
           {item.info}
          </p>
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default Services;
