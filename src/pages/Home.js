import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import getAllProducts from "../api/getAllProducts";
import HeroBanner from "../components/HeroBanner";
import "./Home.css";

function Home({ onAddToCart, cartItems = [] }) {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setAllProducts(data);
      setFilteredProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = allProducts;

    if (category) {
      filtered = filtered.filter(item => item.cuisine === category);
    }

    if (cookTime) {
      filtered = filtered.filter(item => {
        if (cookTime === "short") return item.cookTimeMinutes < 15;
        if (cookTime === "medium") return item.cookTimeMinutes >= 15 && item.cookTimeMinutes <= 30;
        if (cookTime === "long") return item.cookTimeMinutes > 30;
        return true;
      });
    }

    if (price) {
      filtered = filtered.filter(item => {
        const priceValue = item.cookTimeMinutes * 10;
        if (price === "low") return priceValue <= 100;
        if (price === "medium") return priceValue > 100 && priceValue <= 200;
        if (price === "high") return priceValue > 200;
        return true;
      });
    }

    if (rating) {
      filtered = filtered.filter(item => item.rating >= parseFloat(rating));
    }

    setFilteredProducts(filtered);
  }, [category, cookTime, price, rating, allProducts]);

  const handleExploreClick = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeroBanner onExploreClick={handleExploreClick} />

      <div ref={menuRef} id="menu" className="menu-section">
        <h1>What's on your mind?</h1>

        <div className="filter-bar">
          <select onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="">All Categories</option>
            <option value="American">American</option>
            <option value="North Indian">North Indian</option>
            <option value="Japanese">Japanese</option>
            <option value="Chinese">Chinese</option>
            {/* Add more as needed */}
          </select>

          <select onChange={(e) => setCookTime(e.target.value)} value={cookTime}>
            <option value="">Any Cook Time</option>
            <option value="short">Less than 15 min</option>
            <option value="medium">15–30 min</option>
            <option value="long">More than 30 min</option>
          </select>

          <select onChange={(e) => setPrice(e.target.value)} value={price}>
            <option value="">Any Price</option>
            <option value="low">Up to ₹100</option>
            <option value="medium">₹101–₹200</option>
            <option value="high">Above ₹200</option>
          </select>

          <select onChange={(e) => setRating(e.target.value)} value={rating}>
            <option value="">Any Rating</option>
            <option value="3">3+ Stars</option>
            <option value="4">4+ Stars</option>
          </select>

          <button
            className="reset-btn"
            onClick={() => {
              setCategory("");
              setCookTime("");
              setPrice("");
              setRating("");
            }}
          >
            Reset Filters
          </button>
        </div>

        {filteredProducts.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((item) => {
              const isInCart = cartItems.some(cartItem => cartItem.id === item.id);
              const displayPrice = item.cookTimeMinutes * 10;

              return (
                <div key={item.id} className="product-card">
                  <div className="image-container">
                    <img src={item.image} alt={item.name} className="product-img" />
                    {item.cookTimeMinutes > 0 ? (
                      <>
                        <span className="badge price-badge">₹{displayPrice.toFixed(0)}</span>
                        <span className="badge time-badge">{item.cookTimeMinutes} min</span>
                      </>
                    ) : (
                      <span className="badge not-deliverable-badge">Not Deliverable</span>
                    )}
                  </div>
                  <h3>{item.name}</h3>
                  <p className="rating">{"⭐".repeat(Math.round(item.rating))}</p>

                  {isInCart ? (
                    <button className="go-to-cart-btn" onClick={() => navigate("/cart")}>
                      Go to Cart
                    </button>
                  ) : (
                    <button
                      className="add-btn"
                      onClick={() =>
                        onAddToCart({
                          ...item,
                          price: displayPrice,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
