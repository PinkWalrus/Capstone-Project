import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { id, name, description, product_image, price } = product;
  return (
    <div>
      <Link to={`/products/${id}`}>
        <div className="product-card-container">
          <img src={product_image} />
          <div className="product-card-info">
            <h4 className="product-card-title">{name}</h4>
            <span className="product-card-description">{description}</span>
            <button>Add to Cart</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
