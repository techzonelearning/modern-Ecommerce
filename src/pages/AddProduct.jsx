import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firbase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
const AddProduct = () => {
  let [loader, setLoader] = useState(false);
  let navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    features: "",
    category: "",
    subCategory: "",
    sizes: [],
    price: "",
    images: ["", "", "", ""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...product.images];
    newImages[index] = value;
    setProduct((prevProduct) => ({
      ...prevProduct,
      images: newImages,
    }));
  };
  async function postProduct(product) {
    try {
      setLoader(true);
      await addDoc(collection(db, "ECommerce"), product);
      setLoader(false);
      toast.success("Product added successfully");
      navigate("/product");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    postProduct(product);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Form Section */}
      <div className="w-1/2 overflow-y-auto p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              value={product.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="features"
              className="block text-sm font-medium text-gray-700"
            >
              Features
            </label>
            <textarea
              id="features"
              name="features"
              rows="3"
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
              placeholder="Enter features, separated by commas"
              value={product.features}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                value={product.category}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="subCategory"
                className="block text-sm font-medium text-gray-700"
              >
                Sub Category
              </label>
              <input
                id="subCategory"
                name="subCategory"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                value={product.subCategory}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="sizes"
                className="block text-sm font-medium text-gray-700"
              >
                Sizes
              </label>
              <input
                id="sizes"
                name="sizes"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                placeholder="S, M, L, XL"
                value={product.sizes}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                value={product.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Images
            </label>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <div key={index}>
                  <input
                    id={`image-${index}`}
                    name={`image-${index}`}
                    type="url"
                    required
                    className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                    placeholder={`Image URL ${index + 1}`}
                    value={image}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              {loader ? (
                <Loader className="w-6 h-6 animate-spin text-center text-white" />
              ) : (
                "Add Product"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Preview Section */}
      <div className="w-1/2 bg-white p-8 overflow-y-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Product Preview
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">
            {product.title || "Product Title"}
          </h3>
          <p className="text-gray-600 mb-4">
            {product.description || "Product description will appear here."}
          </p>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Features:</h4>
            <ul className="list-disc list-inside">
              {product.features.split(",").map((feature, index) => (
                <li key={index}>{feature.trim()}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </div>
            <div>
              <span className="font-semibold">Sub Category:</span>{" "}
              {product.subCategory}
            </div>
            <div>
              <span className="font-semibold">Sizes:</span> {product.sizes}
            </div>
            <div>
              <span className="font-semibold">Price:</span> ${product.price}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Product Images:</h4>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden"
                >
                  {image ? (
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Product ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      Image {index + 1}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
