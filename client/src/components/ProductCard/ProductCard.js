import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import "./ProductCard.css";

function ProductCard({ product, addProduct, addToCartClick }) {
  // const [products, setProducts] = useState([]);
  const { id, name, description, product_image, price } = product;
  const { errors, setErrors } = useContext(UserContext);

  // useEffect(() => {
  //   fetch(`/products/${id}`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //       // console.log(data.cart.products[0].quantity);
  //       // setCartItems(data);
  //       // setCartItems([...data.cart.products]);
  //       // debugger;
  //     });
  // }, []);

  // function addProduct(newProduct) {
  //   console.log(newProduct);
  //   setCartItems(newProduct);
  // }

  return (
    <div>
      <Link to={`/products/${id}`}>
        <div className="product-card-container">
          <img src={product_image} />
          <div className="product-card-info">
            <h4 className="product-card-title">{name}</h4>
            <span className="product-card-description">{description}</span>
            {/* <button onClick={() => addToCartClick(product)}>Add to Cart</button> */}
          </div>
        </div>
      </Link>
      <button onClick={() => addToCartClick(product)}>Add to Cart</button>
      <Link to={`/cart`}>
        <button>go to cart</button>
      </Link>
    </div>
  );
}

export default ProductCard;
