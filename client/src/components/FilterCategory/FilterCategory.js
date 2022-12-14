import React from "react";

function FilterCategory({ categories, setSelectedCategory }) {
  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <button onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        </div>
      ))}
    </div>
  );
}

export default FilterCategory;
