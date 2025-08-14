import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaPhone, FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import "./Navbar.css";

function Navbar({ cartCount, isLoggedIn, setIsLoggedIn }) {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartCount === 0) return;
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [cartCount]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Logged out");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">🍴 FoodieFi</div>

      <div className="nav-icons">
        <Link to="/">
          <FaHome className="icon" title="Home" />
        </Link>

        <Link to="/cart" style={{ position: "relative" }}>
          <FaShoppingCart
            className={`icon ${animate ? "bump" : ""}`}
            title="Cart"
          />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>

        <Link to="/contact">
          <FaPhone className="icon" title="Contact Us" />
        </Link>

        {isLoggedIn ? (
          <FiLogOut className="icon" title="Logout" onClick={handleLogout} />
        ) : (
          <Link to="/login">
            <FaUser className="icon" title="Login" />
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
