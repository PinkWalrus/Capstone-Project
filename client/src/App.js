import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from  './components/Auth/Signup'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/testing" element={<h1>Test Route</h1>}/>
          <Route path="/" element={<h1>Page Count: {count}</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;