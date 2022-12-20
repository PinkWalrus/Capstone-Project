import React from "react";
import "./FilterCategory.css";

function FilterCategory({ categories, setSelectedCategory }) {
  return (
    <ul className="filter-category">
      {categories.map((category) => (
        <li key={category} className="filter-category">
          <button
            className="filter-category"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FilterCategory;
