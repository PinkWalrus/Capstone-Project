import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilterCard from "../FilterCard/FilterCard";
// import FilterCard from "../FilterCard/FilterCard";
import FilterCategory from "../FilterCategory/FilterCategory";
import ProductCard from "../ProductCard/ProductCard";

function Category({ products, setCartItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // function onCategoryChange(category) {
  //   setSelectedCategory(category);
  // }

  const productsToDisplay = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  products
    .map((product) => product.category)
    .filter((category, index) => category.indexOf(category) === index);

  return (
    <div>
      {/* <div className="product-list-grid-container">
        {products.map((product) => {
          return <div key={product.id}>{product.category}</div>;
        })}
      </div> */}
      {/* <button
        type="submit"
        value="All"
        onClick={(e) => onCategoryChange(e.target.value)}
      >
        All
      </button> */}
      {/* <div>
        {productsToDisplay.map((product) => (
          <FilterCategory
            key={product.id}
            product={product}
            onCategoryChange={onCategoryChange}
          />
        ))}
      </div> */}
      <FilterCategory
        // categories={["All", ...categories]}
        categories={["All", "Light Roast", "Medium Roast", "Dark Roast"]}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <FilterCard
        productsToDisplay={productsToDisplay}
        setCartItems={setCartItems}
      />
    </div>
  );
}

export default Category;
