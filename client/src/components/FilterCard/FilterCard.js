import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function FilterCard({ productsToDisplay, setCartItems }) {
  return (
    <div className="product-list-grid-container">
      {productsToDisplay.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          setCartItems={setCartItems}
        />
      ))}
    </div>
  );
}

export default FilterCard;
