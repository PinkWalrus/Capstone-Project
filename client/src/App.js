import { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserProvider";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Signup from "./pages/Auth/Signup/Signup";
import Login from "./pages/Auth/Login/Login";
import ProductList from "./pages/ProductList/ProductList";
import ProductModal from "./components/ProductModal/ProductModal";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Invoices from "./pages/Invoices/Invoices";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const { user, setUser, errors, setErrors } = useContext(UserContext);

  useEffect(() => {
    fetch("/products")
      .then((resp) => resp.json())
      .then((data) => {
        setProducts([...data]);
      });
  }, []);

  const addToCartClick = (product) => {
    console.log(product);
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    };
    fetch(`/carts`, config).then((resp) => {
      if (resp.ok) {
        return resp.json().then((data) => {
          const userCopy = JSON.parse(JSON.stringify(user));
          userCopy.cart = data;
          setUser(userCopy);
        });
      } else {
        resp.json().then(({ errors }) => {
          setErrors([errors]);
        });
        console.log(errors);
      }
    });
  };

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
        <Route
          path="/products"
          element={
            <ProductList
              products={products}
              setCartItems={setCartItems}
              addToCartClick={addToCartClick}
            />
          }
        />
        <Route
          path="/account"
          element={<Account user={user} setUser={setUser} />}
        />
        <Route path="/products/:id" element={<ProductModal />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route
          path="/cart"
          element={
            <Cart
              user={user}
              products={products}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
