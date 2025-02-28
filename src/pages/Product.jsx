import React, { useContext, useEffect, useState } from "react";
import Navbar2 from "../components/Navbar2";
import { product } from "../context/ProductContext";
import Card2 from "../components/Card2";
import toast from "react-hot-toast";
import { ChevronRight } from "lucide-react";
import { Spinner } from "@material-tailwind/react";

const Product = () => {
  let { getProducts, search, setSearch,isloading } = useContext(product);
  let [filterByCategory, setFilterByCategory] = useState([]);
  let [filterBySubCategory, setFilterBySubCategory] = useState([]);
  let [filterProducts, setFilterProducts] = useState([]);
  let [sorting, setSorting] = useState("relevant");
  let [showFilter, setShowFilter] = useState(false);
  let getCategoryValue = (e) => {
    if (filterByCategory.includes(e.target.value)) {
      setFilterByCategory(
        filterByCategory.filter((item) => item !== e.target.value)
      );
    } else {
      setFilterByCategory([...filterByCategory, e.target.value]);
    }
  };
  let getSubCategoryValue = (e) => {
    if (filterBySubCategory.includes(e.target.value)) {
      setFilterBySubCategory(
        filterBySubCategory.filter((item) => item !== e.target.value)
      );
    } else {
      setFilterBySubCategory([...filterBySubCategory, e.target.value]);
    }
  };

  let filterApplyProducts = () => {
    let filterCopyProducts = getProducts.slice();
    if (filterByCategory.length > 0) {
      filterCopyProducts = filterCopyProducts.filter((item) =>
        filterByCategory.includes(item.category)
      );
    }
    if (filterBySubCategory.length > 0) {
      filterCopyProducts = filterCopyProducts.filter((item) =>
        filterBySubCategory.includes(item.subCategory)
      );
    }
    // search
    if (search) {
      filterCopyProducts = filterCopyProducts.filter((item) =>
        item.title
          .toLowerCase()
          .includes(search.replace(/\s+/g, "").toLowerCase().trim())
      );
    }
    if (filterCopyProducts.length === 0) {
      toast.error("product not found");
      return;
    }
    setFilterProducts(filterCopyProducts);
  };
  useEffect(() => {
    filterApplyProducts();
  }, [filterByCategory, filterBySubCategory, search]);

  let sortProducts = () => {
    let productCopy = getProducts.slice();
    switch (sorting) {
      case "low-high":
        productCopy = productCopy.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        productCopy = productCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        filterApplyProducts();
        break;
    }
    setFilterProducts(productCopy);
  };
  useEffect(() => {
    sortProducts();
  }, [sorting]);

  return (
    <>
      <Navbar2 />
      <div className="flex justify-between w-full px-20 gap-4">
        <div className="bg-[#01BAD4] text-lg font-bold text-white px-6 flex items-center">
          DEPARTMENTS
        </div>
        <input
          type="search"
          placeholder="search entire store here..."
          className="w-full border outline-none rounded-lg py-5 px-6"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* show products  */}
    {
      isloading ? <Spinner className="h-16 w-16 text-gray-900/50 mx-auto" /> :   <div className="px-20 flex md:justify-between md:flex-row flex-col my-10">
      <div className="md:w-1/4 w-full">
        <h1
          className="text-xl font-bold text-gray-900 flex items-center gap-2 cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filters{" "}
          <ChevronRight
            className={`text-gray-900 md:hidden duration-300 ${
              showFilter && "rotate-90"
            }`}
          />
        </h1>

        <div
          className={`my-5 border md:block rounded-lg p-4 ${
            showFilter ? "" : "hidden"
          } `}
        >
          <h1 className="text-lg font-semibold  text-gray-900">
            Filter by Category
          </h1>
          <div className="flex items-center gap-3 my-3 px-5">
            <input
              type="checkbox"
              id="women"
              value={"Women"}
              onChange={getCategoryValue}
            />
            <label htmlFor="women" className="text-gray-600">
              Women
            </label>
          </div>
          <div className="flex items-center gap-3 my-3 px-5">
            <input
              id="men"
              type="checkbox"
              value={"Men"}
              onChange={getCategoryValue}
            />
            <label htmlFor="men" className="text-gray-600">
              Men
            </label>
          </div>
          <div className="flex items-center gap-3 my-3 px-5">
            <input
              id="kids"
              type="checkbox"
              value={"Kids"}
              onChange={getCategoryValue}
            />
            <label htmlFor="kids" className="text-gray-600">
              kids
            </label>
          </div>
        </div>
        <div
          className={`my-5 border md:block rounded-lg p-4 ${
            showFilter ? "" : "hidden"
          } `}
        >
          <h1 className="text-lg font-semibold  text-gray-900">
            Filter by SubCategory
          </h1>
          <div className="flex items-center gap-3 my-3 px-5">
            <input
              type="checkbox"
              id="topWare"
              value={"Toys"}
              onChange={getSubCategoryValue}
            />
            <label htmlFor="topWare" className="text-gray-600">
              Toys
            </label>
          </div>
          <div className="flex items-center gap-3 my-3 px-5">
            <input
              type="checkbox"
              id="bottomWare"
              value={"Dresses"}
              onChange={getSubCategoryValue}
            />
            <label htmlFor="bottomWare" className="text-gray-600">
              Dresses
            </label>
          </div>
          <div className="flex items-center gap-3 my-3 px-5">
            <input
              type="checkbox"
              id="jacket"
              value={"Accessories"}
              onChange={getSubCategoryValue}
            />
            <label htmlFor="jacket" className="text-gray-600">
              Accessories
            </label>
          </div>
        </div>
      </div>
      <div className="md:w-3/4 w-full min-h-screen">
        <div className="flex md:justify-between md:flex-row flex-col px-12">
          <h1 className="text-2xl md:text-left text-right md:mb-0 mb-5 font-bold  text-gray-900">
            Latest Articles
          </h1>
          <select
            onChange={(e) => setSorting(e.target.value)}
            className="border rounded-lg py-2 px-4"
          >
            <option value="relavent">Relavent</option>
            <option value="low-high">Low to High Price</option>
            <option value="high-low">High to Low Price</option>
          </select>
        </div>
        <div>
          {
            filterProducts.length > 0 ? (
              <Card2 product1={filterProducts} />
            ) : (
              <h1 className="text-2xl text-center mt-10 font-bold text-gray-900">
                No Product Found
              </h1>
            )
          }
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default Product;
