// import { useState, useEffect } from "react";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
// import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products, setCartItems }) {
  // const [products, setProducts] = useState([]);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("/products")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //       setProducts([...data]);
  //     });
  // }, []);

  return (
    <div>
      <Category products={products} setCartItems={setCartItems} />
      {/* <div className="product-list-grid-container">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              setProducts={setProducts}
            />
          );
        })}
      </div> */}
      <Footer />
    </div>
  );
}

export default ProductList;
