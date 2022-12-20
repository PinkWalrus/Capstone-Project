import React from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import "./ProductCard.css";

function ProductCard({ product, addToCartClick }) {
  const { id, name, description, product_image, price } = product;

  return (
    <div>
      <Link to={`/products/${id}`}>
        <div className="product-card-container">
          <img src={product_image} />
          <div className="product-card-info">
            <h4 className="product-card-title">{name}</h4>
            <hr className="product-card-hr" />
            <span className="product-card-description">{description}</span>
            <Link as="li" onClick={() => addToCartClick(product)}>
              <div>
                <button className="product-card-cart">
                  <MDBIcon
                    className="product-card-cart"
                    icon="shopping-cart"
                  ></MDBIcon>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
