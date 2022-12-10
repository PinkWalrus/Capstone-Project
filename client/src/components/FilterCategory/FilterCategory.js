import React from "react";
// import Category from "../Category/Category";

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

//   {/* <button
//     value={product.category}
//     onClick={(e) => onCategoryChange(e.target.value)}
//   >
//     {product.name}
//   </button> */}

//   {/* <div className="filter-container">
//     <button value="All" onClick={(e) => onCategoryChange(e.target.value)}>
//       ALL
//     </button>
//     <button
//       type="submit"
//       value={product.category}
//       onClick={(e) => onCategoryChange(e.target.value)}
//     >
//       DARK ROAST
//     </button>
//     <button
//       type="submit"
//       value={product.category}
//       onClick={(e) => onCategoryChange(e.target.value)}
//     >
//       MEDIUM ROAST
//     </button>
//     <button
//       type="submit"
//       value={product.category}
//       onClick={(e) => onCategoryChange(e.target.value)}
//     >
//       LIGHT ROAST
//     </button>
//   </div> */}
