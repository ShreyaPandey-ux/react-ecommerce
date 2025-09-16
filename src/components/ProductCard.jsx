import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="
        border rounded-lg shadow p-4 bg-white
        flex flex-col items-center
        w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5
        box-border
      "
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover mb-2 rounded"
      />

      {/* Product Name & Price */}
      <h2 className="font-bold text-lg ">{product.name}</h2>
      <p className="text-gray-700 mb-2">₹{product.price}</p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 w-full mt-2">
        <button
          onClick={() => dispatch({ type: "ADD", payload: product })}
          className="bg-blue-500 text-dark py-1 px-2 rounded hover:bg-blue-700 transition flex-1 text-center"
        >
          Add to Cart
        </button>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className=" mx-3 btn btn-primary bg-gray-500 text-white py-1 px-2 rounded hover:bg-gray-700 transition flex-1 text-center"
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>
      </div>

      {/* Product Details */}
      {showDetails && (
        <div className="mt-4 text-left w-full bg-gray-100 p-2 rounded text-sm sm:text-base">
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock}
          </p>
        </div>
      )}
    </div>
  );
}
