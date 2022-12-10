import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function FilterCard({ productsToDisplay }) {
  return (
    <div className="product-list-grid-container">
      {productsToDisplay.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default FilterCard;
