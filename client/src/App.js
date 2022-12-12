import { useState, useEffect, useContext } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { UserContext } from "./context/UserProvider";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Signup from "./components/Auth/Signup/Signup";
import Login from "./components/Auth/Login/Login";
import ProductList from "./pages/ProductList/ProductList";
import ProductModal from "./components/ProductModal/ProductModal";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Invoices from "./pages/Invoices/Invoices";

function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  let { id } = useParams();

  const { user, setUser, errors, setErrors } = useContext(UserContext);

  // const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    fetch("/products")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setProducts([...data]);
      });
  }, []);

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        // console.log([...data.cart.products]);
        // console.log(data.cart.products[0].quantity);
        setCarts([...data.cart.products]);
        // debugger;
      });
  }, []);

  function addProduct(newProduct) {
    console.log(newProduct);
    setProducts([...products, newProduct]);
  }

  const addToCartClick = () => {
    const productData = {
      name: "",
      description: "",
      product_image: "",
      price: "",
      quantity_in_stock: "",
      category: "",
    };
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    };
    fetch("/carts", config).then((resp) => {
      if (resp.ok) {
        return resp.json().then((carts) => {
          console.log(carts);
          addProduct(carts);
        });
      } else {
        resp.json().then(({ errors }) => {
          setErrors([errors]);
        });
        console.log(errors);
      }
    });
  };

  // debugger;

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home products={products} addToCartClick={addToCartClick} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route
          path="/account"
          element={<Account user={user} setUser={setUser} />}
        />
        <Route path="/products/:id" element={<ProductModal />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route
          path="/cart"
          element={<Cart user={user} products={products} carts={carts} />}
        />
      </Routes>
    </div>
  );
}

export default App;
