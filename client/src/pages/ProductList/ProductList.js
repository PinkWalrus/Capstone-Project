import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import "./ProductList.css";

function ProductList({ products, setCartItems, addProduct, addToCartClick }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <img
          className="banner-img"
          src="https://ik.imagekit.io/pinkwalrus/Coffee_Shop_Banner-10_TBa2HZCsO.png"
        />
      </div>
      <Container className="mb-6">
        <Category
          products={products}
          setCartItems={setCartItems}
          addProduct={addProduct}
          addToCartClick={addToCartClick}
        />
      </Container>
      <Footer />
    </>
  );
}

export default ProductList;
