import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function FilterCard({
  productsToDisplay,
  setCartItems,
  addProduct,
  addToCartClick,
}) {
  return (
    <div className="product-list-grid-container">
      {productsToDisplay.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          setCartItems={setCartItems}
          addProduct={addProduct}
          addToCartClick={addToCartClick}
        />
      ))}
    </div>
  );
}

export default FilterCard;
