import { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  // const navigate = useNavigate();

  useEffect(() => {
    fetch("/products")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProducts([...data]);
      });
  }, []);

  return (
    <div className="product-list-grid-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
