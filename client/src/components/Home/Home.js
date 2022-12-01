import React from "react";
import { useState, useEffect } from "react";

function Home({ user }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div>
      Welcome {user.first_name}!<h1>Page Count: {count}</h1>
    </div>
  );
}

export default Home;
