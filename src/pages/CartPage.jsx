// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
     <h1 className="text-center text-gray-600 text-2xl font-bold">Your Cart</h1>


      {cart.length === 0 ? (
        <p className="text-centre-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow-sm"
            >
              {/* Product Info */}
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">
                  ₹{item.price} x {item.qty}
                </p>
              </div>

              {/* Qty Controls */}
              <div className="flex items-center">
                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: item.id })
                  }
                  className="px-2 py-1 bg-gray-200 rounded ml-2"
                >
                  -
                </button>
                <span className="mx-2">{item.qty}</span>
                <button
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: item.id })
                  }
                  className="px-2 py-1 bg-gray-200 rounded ml-2"
                >
                  +
                </button>
                <button type ="button" class=" mx-3 btn btn-danger"
                  onClick={() =>
                    dispatch({ type: "REMOVE", payload: item.id })
                  }
                 

                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Cart Total */}
          <div className="text-right font-bold text-lg mt-4">
            Total amount: ₹{total}
          </div>
        </div>
      )}
    </div>
  );
}
