import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import ProductList from "./ProductList";
import Cart from "./Cart";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />


        <Route path="/" element={<h2>Welcome to Shopping App</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

