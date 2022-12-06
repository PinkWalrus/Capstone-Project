import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card-container">
      <img src={product.product_image} />
      <div className="product-card-info">
        <h2 className="product-card-title">{product.name}</h2>
        <span className="product-card-description">{product.description}</span>
      </div>
    </div>
  );
}

export default ProductCard;
