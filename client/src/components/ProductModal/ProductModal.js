import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductModal() {
  const [products, setProducts] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    fetch(`/products/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProducts([data]);
      });
  }, []);

  return (
    <div>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.category}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <img src={product.product_image} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductModal;
