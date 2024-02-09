import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Nav() {
  let navigate = useNavigate();
  function handleClick1() {
    navigate("/");
  }
  function handleClick2() {
    navigate("/product");
  }
  return (
    <div>
      <div style={{ backgroundColor: "lightgray", color: "black" }}>
        Navbar hu mai
        <button onClick={handleClick1}>Home</button>
        <button onClick={handleClick2}>Products</button>
      </div>
    </div>
  );
}

export default App;