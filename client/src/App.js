import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Signup from "./components/Auth/Signup";
import Login from "./components/Login/Login";

function App() {
  const [user, setUser] = useState({
    email: "",
  });

  const [errors, setErrors] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar
          setUser={setUser}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Routes>
          <Route path="/signup" element={<Signup setUser={setUser} />} />
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
          <Route path="/testing" element={<h1>Test Route</h1>} />
          <Route path="/" element={<Home user={user} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
