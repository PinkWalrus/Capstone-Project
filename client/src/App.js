import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
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
  const [user, setUser] = useState({
    email: "",
  });
  const [errors, setErrors] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  let { id } = useParams();

  // const navigate = useNavigate();

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

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          console.log(user);
          if (Object.keys(user)[0] !== "cart") {
            setIsLoggedIn(true);
          }
          setUser(user);
          // console.log(user.cart.products);
        });
      } else {
        resp.json().then(({ errors }) => setErrors([errors]));
      }
    });
  }, []);

  // debugger;

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar
          setUser={setUser}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Routes>
          <Route path="/" element={<Home user={user} products={products} />} />
          <Route
            path="/signup"
            element={
              <Signup
                setUser={setUser}
                errors={errors}
                setErrors={setErrors}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setUser={setUser}
                errors={errors}
                setErrors={setErrors}
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route
            path="/products"
            element={<ProductList products={products} />}
          />
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
    </BrowserRouter>
  );
}

export default App;
