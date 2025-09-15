import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { useSearch } from "../context/SearchContext";

export default function ProductList() {
  const { query } = useSearch();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
