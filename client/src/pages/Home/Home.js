import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import Carousel from "../../components/Carousel/Carousel";
import "./Home.css";

function Home({ products, setProducts, addToCartClick, addProduct }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Carousel />
      {/* <div>
        <img
          className="banner-img"
          src="https://ik.imagekit.io/pinkwalrus/tr:w-1000,h-480/CoffeeShop_banner-01_yBskzU_XU_.png"
        />
      </div> */}
      <Container style={{ maxWidth: 1000 }}>
        <h2 className="home-title fw-light coffee-font">
          OUR FEATURED PRODUCTS:
        </h2>
        <Row xs={1} md={3} className="g-3">
          {products.slice(2, 5).map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                setProducts={setProducts}
                addToCartClick={addToCartClick}
                addProduct={addProduct}
              />
            );
          })}
        </Row>
        <div className="home-container">
          <Link to={`/products`} className="home-container">
            <button className="home">ALL COFFEE</button>
          </Link>
        </div>
      </Container>
      <div className="home-yellow-bg">
        <h2 className="text-center fw-light coffee-font">NOT A MEMBER?</h2>
        <Link to={`/signup`}>
          <button className="home">REGISTER NOW</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Home;
