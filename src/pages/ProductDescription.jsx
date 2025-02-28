import React, { useContext, useEffect, useState } from "react";
import { assets, products1, reviews } from "../assets";
import Navbar2 from "../components/Navbar2";
import { useParams } from "react-router-dom";
import { product } from "../context/ProductContext";
import Services from "../components/Services";
import RelatedProducts from "../components/RelatedProducts";
import { Star } from "lucide-react";

const ProductDescription = () => {
  let tabNavigation = ["Description", "Reviews", "Shipping"];
  let [tab, setTab] = useState(tabNavigation[0]);
  let [filterItem, setFilterItem] = useState({});
  let { id } = useParams();
  let { getProducts, addToCart } = useContext(product);
  let [filterProducts] = getProducts.filter((item) => item.id == id);
  let [image, setImage] = useState(getProducts.images?.[0]);
  let [size, setSize] = useState();
  useEffect(() => {
    if (filterProducts) {
      setFilterItem(filterProducts);
    }
  }, [id, filterProducts]);

  return (
    <div className="md:px-20 px-10">
      <Navbar2 />
      <div className="flex my-6 justify-between items-center w-full md:h-[90vh] md:flex-row flex-col">
        <div className="w-1/2 h-full flex justify-around">
          <div className="flex flex-col gap-3">
            {filterItem.images?.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                className=" w-[95px] h-1/3 object-cover"
                alt="..loading"
                key={index}
              />
            ))}
          </div>
          <img
            src={image || filterItem.images?.[0]}
            className="md:w-[80%] h-full object-cover"
            alt="..loading"
          />
        </div>
        <div className="  h-full w-1/2 md:px-20 px-10 md:mt-0 mt-5">
          <h1 className="text-2xl font-bold text-gray-900">
            {filterItem.title}
          </h1>
          <h1 className="text-lg text-gray-600 my-3">
            <span className="font-semibold text-gray-900">price : </span>{" "}
            {filterItem.price}
          </h1>
          <div className="flex gap-3 items-center">
            {["", "", "", "", ""].map((item, index) => (
              <div key={index}>
                <Star size={20} />
              </div>
            ))}
          </div>
          <ul className="list-disc text-base list-inside text-gray-600 my-5">
            {filterItem.features?.split(",").map((item, index) => (
              <li className="list-none" key={index}>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base text-gray-600 mb-4">
            {filterItem.description}
          </p>
          <div className="flex gap-2 my-5">
            {filterItem?.sizes?.split(",").map((item, index) => (
              <div
                onClick={() => {
                  setSize(item);
                }}
                key={index}
                className={`${
                  size == item ? "bg-black text-white" : "bg-transparent "
                } cursor-pointer rounded-md text-gray-800 font-semibold px-4 py-2 border border-black text-center `}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex gap-5 items-center">
            <button
              onClick={() => addToCart(filterItem.id, size)}
              className="bg-black text-white px-6 py-2 rounded-full"
            >
              Add to cart
            </button>
            <button className="px-6 py-2 border border-black text-black rounded-full">
              Buy Now
            </button>
          </div>
          <div className="my-5 flex gap-4 font-medium">
            <p className="text-base text-gray-600">Size Guide</p>
            <p className="text-base text-gray-600">Delivery & Return</p>
          </div>
          <h1 className="text-green-600">
            <span className="mr-2 font-semibold text-black">Availability:</span>
            In stock
          </h1>
        </div>
      </div>
      <div className="w-full mt-20 mb-10">
        <div className="mx-auto flex items-center justify-center gap-5 font-mgray-800">
          {tabNavigation.map((item, index) => (
            <button
              onClick={() => setTab(item)}
              key={index}
              className={` text-gray-800 px-6 py-2 border font-semibold rounded-md ${
                tab == item ? "text-white bg-black " : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-10 text-gray-600 text-md">
          {tab == "Description" && (
            <div>
              <p className="text-gray-600 text-base">
                {filterItem.description}
              </p>
            </div>
          )}
          {tab == "Reviews" && (
            <div className="">
              <div className="flex gap-2 items-center justify-between">
                <h2 className="font-bold text-gray-900 text-2xl">
                  Total Review
                </h2>
                <div className="px-3 py-1 border rounded-md text-gray-600 text-sm">
                  March 2018 - February 2022
                </div>
              </div>
              {reviews.map((item, index) => (
                <div key={index} className="flex gap-4 mt-5">
                  <div className="flex gap-2 items-center">
                    <img
                      src={filterItem.img}
                      alt=""
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h3 className="font-bold text-gray-900 text-sm">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.date}</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-1">
                      <span className="text-gray-600 text-sm">Rating</span>
                      <span className="text-gray-600 text-sm">
                        {item.rating}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <RelatedProducts
            category={filterItem.category}
            subCategory={filterItem.subCategory}
          />
          <h1 className="text-xl font-extrabold italic mb-1 text-center text-gray-900">
            DELIVERY & RETURNS
          </h1>
          <p className="text-gray-600 text-center font-medium">
            Custom static block for product detail
          </p>
        </div>
        <Services />
      </div>
    </div>
  );
};

export default ProductDescription;
