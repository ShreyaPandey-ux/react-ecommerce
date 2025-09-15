import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const [showDetails, setShowDetails] = useState(false); // state for details

  return (
    <div className="border rounded-lg shadow hover:shadow-lg p-4 flex flex-col items-center bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover mb-2 rounded"
      />
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p className="text-gray-700 mb-2">₹{product.price}</p>

      <div className="flex gap-2">
        <button type="button" class="btn btn-warning"
          onClick={() => dispatch({ type: "ADD", payload: product })}
          className="bg-blue-600 text-dark py-1 px-4 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>

        <button 
          onClick={() => setShowDetails(!showDetails)}
          className="btn btn-primary mx-3 bg-gray-600 text-white py-1 px-4 rounded hover:bg-gray-700 transition"
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>
      </div>

      {showDetails && (
        <div className="mt-4 text-left w-full bg-gray-100 p-2 rounded">
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Stock:</strong> {product.stock}</p>
        </div>
      )}
    </div>
  );
}
