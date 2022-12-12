import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";

function Home({ products, setProducts, addToCartClick }) {
  const [count, setCount] = useState(0);

  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  // debugger;

  return (
    <div>
      Welcome {user.first_name}!<h1>Page Count: {count}</h1>
      <Banner />
      OUR FEATURED PRODUCTS:
      <div className="product-list-grid-container">
        {products.slice(2, 5).map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              setProducts={setProducts}
              addToCartClick={addToCartClick}
            />
          );
        })}
      </div>
      <Link to={`/products`}>
        <button>ALL COFFEE</button>
      </Link>
      <Footer />
    </div>
  );
}

export default Home;
