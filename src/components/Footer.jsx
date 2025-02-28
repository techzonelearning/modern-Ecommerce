import React from "react";
import { assets, footer } from "../assets";
import { useNavigate } from "react-router-dom";

let ListItems = ({ title, items }) => {
  return (
    <div className="flex flex-col md:w-[16%] sm:w-[24%] w-1/2">
      <h1 className="text-lg font-semibold mb-6 text-gray-900">{title}</h1>
      {items.map((item, index) => (
        <p
          key={index}
          className="text-md py-1 hover:translate-x-2 duration-300 cursor-pointer hover:text-gray-800 text-gray-600"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

const Footer = () => {
  let naviagte = useNavigate()
  return (
    <div className="flex flex-col md:flex-row justify-between md:px-20 px-10 h-[60vh] pt-14 bg-[#F6F6F8]">
      <div className="md:w-1/4 sm:w-1/2 ">
        <img onClick={() => naviagte("/")} src={assets.logo} alt="...loading" className="cursor-pointer w-36" />
        <div className="flex flex-col gap-4 mt-7">
          {footer.claue.map((item, index) => (
            <div key={index} className="flex gap-2">
              <item.icon size={20} className="text-gray-900" />
              <p className="text-sm text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

    <div className="md:w-1/2 justify-around sm:w-full flex flex-wrap md:my-0 my-5">
    <ListItems title={"Categories"} items={footer.Categories} />
      <ListItems title={"Infomation"} items={footer.Infomation} />
      <ListItems title={"Quick Links"} items={footer.Quick_Links} />
    </div>

      <div className="md:w-1/4 sm:w-1/2 flex flex-col ">
        <h1 className="text-lg font-semibold mb-6 text-gray-900">Newsletter</h1>
        <p className="text-base text-gray-600">
          Subscribe to our newsletter and get 10% off your first purchase
        </p>
        <form className="flex mt-5 w-full rounded-full border-2 border-gray-900 p-1">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[65%]  bg-transparent border-none outline-none  py-2 px-6"
          />
          <button className="bg-[#222324] rounded-full text-base font-semibold text-white py-2.5 px-5">
            Subscribe
          </button>
        </form>
        <div className="flex gap-4 mt-5 flex-wrap">
          {footer.payment.map((item, index) => (
            <img key={index} src={item} alt="" className="w-46" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
