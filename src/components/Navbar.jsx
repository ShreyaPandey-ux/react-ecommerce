import React, { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { query, setQuery } = useSearch();
  const { cart } = useCart();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);

  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar">
      
      {/* Brand */}
      <div className="brand mx-1" onClick={() => navigate("/")}>
        ShopEase
      </div>

      {/* Search Input */}
      <div className={`search-container ${searchOpen ? "open" : ""}`}>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Right buttons */}
      <div className="right-buttons">
      
        {/* Cart button for mobile */}
      <button className=" mx-3 cart-btn-mobile" onClick={() => navigate("/cart")}>
        🛒
        {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
      </button>


       
      </div>
    </nav>
  );
}
