import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import FinalCheckout from "./pages/FinalCheckout";



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  return (
    <Router>
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        
     <Route
  path="/"
  element={<Home onAddToCart={handleAddToCart} cartItems={cartItems} />}
/>

        <Route
          path="/cart"
          element={
            isLoggedIn ? (
              <Cart
                items={cartItems}
                onRemove={handleRemoveFromCart}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/final-checkout"
          element={
            isLoggedIn ? (
              <FinalCheckout cartItems={cartItems} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        
      </Routes>
    
    </Router>
  );
}

export default App;
