import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Home from "./components/Home/Home";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/testing" element={<h1>Test Route</h1>} />
          <Route path="/" element={<Home user={user} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
