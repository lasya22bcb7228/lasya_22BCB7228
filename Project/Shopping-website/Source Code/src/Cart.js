/*import React, { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  const placeOrder = async () => {
    const response = await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    });

    const result = await response.json();
    alert(result.message || "Order placed successfully!");
    localStorage.removeItem("cart");
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <p><strong>Total: ₹{total}</strong></p>
          <button onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
}

export default Cart;*/
import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const placeOrder = async () => {
    const order = {
      items: cartItems,
      username: localStorage.getItem("userEmail") || "guest@example.com",
    };

    const response = await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    const result = await response.json();
    alert(result.message || "Order placed!");
    if (result.message?.toLowerCase().includes("success")) {
      localStorage.removeItem("cart");
      navigate("/products");
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-grid">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-card">
                <img src={item.imageURL} alt={item.name} className="cart-image" />
                <h4 className="cart-title">{item.name}</h4>
                <p className="cart-price">₹{item.price}</p>
                <p className="cart-detail">Size: {item.size}</p>
                
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{getTotalPrice()}</h3>
            <button className="checkout-button" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

