import React, { useState } from "react";
import FilterCard from "../FilterCard/FilterCard";
import FilterCategory from "../FilterCategory/FilterCategory";

function Category({ products, setCartItems, addProduct, addToCartClick }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const productsToDisplay = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  products
    .map((product) => product.category)
    .filter((category, index) => category.indexOf(category) === index);

  return (
    <div>
      <FilterCategory
        categories={["All", "Light Roast", "Medium Roast", "Dark Roast"]}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FilterCard
        productsToDisplay={productsToDisplay}
        setCartItems={setCartItems}
        addProduct={addProduct}
        addToCartClick={addToCartClick}
      />
    </div>
  );
}

export default Category;
