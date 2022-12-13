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
  const [cartItems, setCartItems] = useState([]);
  let { id } = useParams();

  const { user, setUser, errors, setErrors } = useContext(UserContext);

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
        console.log([...data.cart.products]);
        // console.log(data.cart.products[0].quantity);
        setCartItems([...data.cart.products]);
        // debugger;
      });
  }, []);

  // useEffect(() => {
  //   fetch(`/products/${id}`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //       // console.log(data.cart.products[0].quantity);
  //       // setCartItems([...data.cart.products]);
  //       // debugger;
  //     });
  // }, []);

  // function addProduct(newProduct) {
  //   console.log(newProduct);
  //   setCartItems([...products, newProduct]);
  // }

  // const addToCartClick = () => {
  //   const productData = {
  //     name: "",
  //     description: "",
  //     product_image: "",
  //     price: "",
  //     quantity_in_stock: "",
  //     category: "",
  //   };
  //   const config = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(productData),
  //   };
  //   fetch(`/products/${id}`, config).then((resp) => {
  //     if (resp.ok) {
  //       return resp.json().then((data) => {
  //         console.log(data);
  //         // console.log([...data.cart.products]);
  //         // addProduct(cartItems);
  //         // setProducts(cartItems);
  //       });
  //     } else {
  //       resp.json().then(({ errors }) => {
  //         setErrors([errors]);
  //       });
  //       console.log(errors);
  //     }
  //   });
  // };

  function removeFromCart(id) {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  }

  // debugger;

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <ProductList products={products} setCartItems={setCartItems} />
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
            <Cart user={user} products={products} cartItems={cartItems} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
