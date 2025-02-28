import React, { useContext } from "react";
import { assets } from "../assets";
import { Heart, ShoppingBag, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";
import { product } from "../context/ProductContext";

const Navbar2 = () => {
  let navigate = useNavigate();
  let {productCount} = useContext(product);
  
  
  return (
    <div className="h-24 flex justify-between items-center px-20">
      <img onClick={() => navigate("/")} src={assets.logo} alt="..loading" className="cursor-pointer w-36 md:block hidden" />
      <div className="flex items-center gap-6">
        <div className="flex flex-col">
          <b className="">Call Us: +842437955813</b>
          <p className=" text-gray-600">
            From 8:00 to 17:00 (Mon-Sun) Free by Viet Nam
          </p>
        </div>
       
        <Heart />
        <ShoppingBag onClick={() => navigate("/cart")} />
    {productCount()}
      </div>
    </div>
  );
};

export default Navbar2;
