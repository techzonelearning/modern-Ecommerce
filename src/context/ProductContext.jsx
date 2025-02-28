import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { products1 } from "../assets";
import toast from "react-hot-toast";
import { db } from "../firebase/firbase";

let product = createContext();

let ContextProvider = ({ children }) => {
  let [isloading, setIsLoading] = useState(false);
  let [getProducts, setProducts] = useState([]);
  let [search, setSearch] = useState("");
  let [cartItem, setCartItem] = useState({});

  async function getProductInFirebase() {
    let storeProduct = [];
    setIsLoading(true);
    const querySnapshot = await getDocs(collection(db, "ECommerce"));
    querySnapshot.forEach((doc) => {
      storeProduct.push({ ...doc.data(), id: doc.id });
    });

    setProducts([...storeProduct]);
    setIsLoading(false);
  }
  useEffect(() => {
    getProductInFirebase();
  }, []);
  function addToCart(id, size) {
    let cartItemCopy = structuredClone(cartItem);
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    if (cartItemCopy[id]) {
      if (cartItemCopy[id][size]) {
        cartItemCopy[id][size] += 1;
      } else {
        cartItemCopy[id][size] = 1;
      }
    } else {
      cartItemCopy[id] = {};
      cartItemCopy[id][size] = 1;
    }
    setCartItem(cartItemCopy);
  }

  function productCount() {
    let count = 0;
    for (let item in cartItem) {
      for (let size in cartItem[item]) {
        if (cartItem[item][size] > 0) {
          count += cartItem[item][size];
        }
      }
    }
    return count;
  }

  let value = {
    isloading,
    getProducts,
    setIsLoading,
    setProducts,
    search,
    setSearch,
    addToCart,
    productCount,
  };
  return <product.Provider value={value}>{children}</product.Provider>;
};

export { product, ContextProvider };
