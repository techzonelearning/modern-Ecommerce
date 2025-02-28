import {
  FilePlus,
  LayoutDashboard,
  LogOut,
  Scroll,
  Settings,
} from "lucide-react";

let drawerMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Product List",
    path: "/product-list",
    icon: Scroll,
  },
  {
    title: "Add Product",
    path: "/add-product",
    icon: FilePlus,
  },
  {
    title: "Setting",
    path: "/setting",
    icon: Settings,
  },
  {
    title: "Log Out",
    path: "/logout",
    icon: LogOut,
  },
];
import img from "./IMG/0.1.jpg"
let TopProduct = [
    {
        img: img,
        title: "Patimax Fragrance Long...",
        quantity: "100 Items",
        country : "USA", 
    },{
        img: img,
        title: "Nulo MedalSeries Adult Cat...",
        quantity: "100 Items",
        country : "UK",
    },{
        img: img,
        title: "Patimax Fragrance Long...",
        quantity: "100 Items",
        country : "USA",
    },{
        img: img,
        title: "Nulo MedalSeries Adult Cat...",
        quantity: "100 Items",
        country : "UK",
    },{
        img: img,
        title: "Patimax Fragrance Long...",
        quantity: "100 Items",
        country : "USA",
    },{
        img: img,
        title: "Nulo MedalSeries Adult Cat...",
        quantity: "100 Items",
        country : "UK",
    },{
        img: img,
        title: "Patimax Fragrance Long...",
        quantity: "100 Items",
        country : "USA",
    },{
        img: img,
        title: "Nulo MedalSeries Adult Cat...",
        quantity: "100 Items",
        country : "UK",
    }
]
export {drawerMenu, TopProduct}