/*import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const goToCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div>
      <h2>Product Catalog</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                border: "1px solid gray",
                borderRadius: "8px",
                padding: "10px",
                margin: "10px",
                width: "200px",
              }}
            >
              <h4>{product.name}</h4>
              <p>Price: ₹{product.price}</p>
              <p>Size: {product.size}</p>
              <p>Color: {product.color}</p>
              <p>Stock: {product.quantity}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <button onClick={goToCart}>Go to Cart ({cart.length})</button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
*/
/*import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const goToCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div className="p-10 bg-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Product Catalog</h2>
      {products.length === 0 ? (
        <p className="text-center">No products available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold mb-1">{product.name}</h4>
              <p className="text-gray-600">Price: ₹{product.price}</p>
              <p className="text-gray-600">Size: {product.size}</p>
              <p className="text-gray-600">Color: {product.color}</p>
              <p className="text-gray-600">Stock: {product.quantity}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-3 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-8 flex justify-center">
          <button onClick={goToCart} className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
            Go to Cart ({cart.length})
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;*/
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css"; // Custom CSS

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  /*const addToCart = (product) => {
    setCart([...cart, product]);
  };*/
  const addToCart = (product) => {
    const selectedSize = prompt("Enter size (e.g. S, M, L):");
    const quantity = parseInt(prompt("Enter quantity:"), 10);
  
    if (!selectedSize || isNaN(quantity) || quantity < 1) {
      alert("Please enter valid size and quantity.");
      return;
    }
  
    const itemToAdd = {
      productId: product._id,
      name: product.name,
      price: product.price,
      size: selectedSize,
      quantity: quantity,
      imageURL: product.imageURL,
      
    };
  
    setCart((prevCart) => [...prevCart, itemToAdd]);
  };
  

  const goToCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    <div className="catalog-container">
      <h2 className="catalog-heading">Product Catalog</h2>

      {products.length === 0 ? (
        <p className="no-products">No products available</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.imageURL} alt={product.name} className="product-image" />
              <h4 className="product-title">{product.name}</h4>
              <p className="product-price">₹{product.price}</p>
              <p className="product-detail">Size: {product.size}</p>
              
              <p className="product-detail">Stock: {product.stock}</p>
              <button onClick={() => addToCart(product)} className="add-button">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="go-to-cart">
          <button className="go-to-cart-btn" onClick={goToCart}>
            Go to Cart ({cart.length})
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
