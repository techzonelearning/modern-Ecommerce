import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { assets } from "../assets";
import { AlignJustify, ShoppingCart } from "lucide-react";
import { drawerMenu } from "../assets/admin";
import { Link } from "react-router-dom";

export default function LeftDrawer() {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <AlignJustify className="cursor-pointer" onClick={openDrawer} />
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <img src={assets.logo} className="w-36" alt="" />
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col gap-2 mt-10">
          {drawerMenu.map((item, index) => (
            <Link
              className="flex cursor-pointer rounded-lg hover:bg-gray-200 p-2 items-center gap-4 text-gray-800 font-semibold"
              key={index}
              to={item.path}
              onClick={closeDrawer}
            >
              {<item.icon />}
              {item.title}
            </Link>
          ))}
        </div>
      </Drawer>
    </React.Fragment>
  );
}
