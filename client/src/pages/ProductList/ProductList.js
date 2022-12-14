import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import "./ProductList.css";

function ProductList({ products, setCartItems, addProduct }) {
  return (
    <div>
      <Category
        products={products}
        setCartItems={setCartItems}
        addProduct={addProduct}
      />
      <Footer />
    </div>
  );
}

export default ProductList;
