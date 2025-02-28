import React from "react";
import { assets, DEPARTMENTS } from "../assets";
import Search from "./Search";

const Hero = () => {
  return (
    <div className="flex px-20 justify-between">
      <div className="w-[22%] flex flex-col border">
        <div className="bg-[#01BAD4] text-xl font-semibold text-white py-2.5 px-6">
          DEPARTMENTS
        </div>
        {DEPARTMENTS.map((item, index) => (
          <div
            key={index}
            className="bg-white border hover:text-gray-500 cursor-pointer border-gray-100 text-base  text-gray-700 py-2.5 px-6"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="w-3/4 flex flex-col gap-7">
        <div>
        <Search/>
        </div>
        <div className="flex justify-between">
          <div className=" relative">
            <img src={assets.banner1} alt="" />
            <div className="absolute top-20 left-10">
              <p className="text-2xl text-white font-semibold">
                Beautiful 2025
              </p>
              <h1 className="text-5xl font-bold text-white my-3">
                New Arrivals
              </h1>
              <button className="hover:bg-black hover:text-white duration-300 hover:border-black rounded-full text-white mt-4 border-2 border-white font-semibold py-2.5 px-9">
                Discover now
              </button>
            </div>
          </div>
          <div className="relative">
            <img src={assets.banner2} alt="" />
            <div className="absolute flex-col p-5 bottom-10 right-10 w-44 h-32 bg-[rgba(255,255,255,0.5)] flex items-center justify-center rounded-lg">
              <p className="text-black text-lg text-center font-semibold">
                Top view in this week
              </p>
              <h1 className="text-black text-3xl font-bold">Trending</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
