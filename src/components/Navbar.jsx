import React from "react";
import { assets, navbar } from "../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, User, X } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@material-tailwind/react";
import LeftDrawer from "./LeftDrawer";

const Navbar = () => {
  let [open, setOpen] = React.useState(false);
  let { openSignIn } = useClerk();
  let { user } = useUser();
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <div className="sticky top-0 left-0 z-10">
      <div className=" bg-[#F6F6F8] flex justify-between h-20 px-20 items-center">
        {(location.pathname == "/admin" ||
          location.pathname == "/add-product" ||
          location.pathname == "/product-list" ||
          location.pathname == "/dashboard") && <LeftDrawer />}
        <ul className="gap-6 hidden md:flex">
          {navbar.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="font-semibold text-gray-800"
            >
              {item.title}
            </Link>
          ))}
        </ul>
        <div className="flex  gap-4 text-sm text-gray-600">
          {user ? (
            <div className="flex gap-2 items-center">
              <UserButton />
              <p className="font-semibold capitalize text-gray-800">
                {user.firstName}
              </p>
            </div>
          ) : (
            <div onClick={openSignIn} className="flex gap-2 items-center">
              <User className="text-black cursor-pointer" />
              <span className="cursor-pointer text-base font-semibold text-black">
                Login
              </span>
            </div>
          )}
          <Button onClick={() => navigate("/admin")}>Admin</Button>
        </div>

        <Menu size={30} onClick={() => setOpen(!open)} className="md:hidden" />
      </div>

      {/* humbarger menu  */}

      <div
        className={`md:hidden h-screen duration-300 w-11/12 fixed top-0 ${
          open ? "left-0" : "-left-full"
        } bg-[#222324] text-white flex flex-col justify-center items-center z-20`}
      >
        <img
          src={assets.logo}
          alt="..loading"
          className="w-36 absolute top-5 left-5 invert md:hidden block"
        />
        <ul className="gap-6 flex flex-col">
          {navbar.map((item, index) => (
            <Link
              onClick={() => setOpen(!open)}
              key={index}
              to={item.path}
              className="font-semibold"
            >
              {item.title}
            </Link>
          ))}
          <X
            onClick={() => setOpen(!open)}
            size={30}
            className="absolute top-5 right-5"
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
