// src/components/Navbar.jsx
import React from "react";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { query, setQuery } = useSearch();
  const { cart } = useCart();
  const navigate = useNavigate();

  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <div className="container-fluid">
        {/* Brand */}
        <span
          className="navbar-brand fw-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          ShopEase
        </span>

        {/* Toggler (Hamburger) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Search Bar */}
          <form className="d-flex mx-auto my-2" style={{ maxWidth: "500px", flex: 1 }}>
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-control me-2"
            />
          </form>

          {/* Cart Button */}
          <button
            onClick={() => navigate("/cart")}
            className="btn btn-outline-light position-relative"
          >
            Cart
            {itemCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
