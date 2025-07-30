import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ items, onRemove, onIncrease, onDecrease }) {
  const subtotal = items.reduce(
    (acc, item) => acc + (Number(item.price) * item.quantity || 0),
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="cart-container">
      <div className="cart-page">
        <h2 className="cart-heading">Your Cart</h2>

        <div className="cart-items">
          {items.length === 0 ? (
            <p className="empty-cart">Your cart is empty 😕</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image || "https://via.placeholder.com/80"}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>{item.description || "No description"}</p>
                  <p className="price">Rs. {item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => onDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onIncrease(item.id)}>+</button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => onRemove(item.id)}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-summary">
          <div className="summary-item">
            <span>Subtotal</span>
            <span>Rs. {subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Tax & Fees</span>
            <span>Rs. {tax.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>Rs. {total.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-actions">
          <Link to="/" className="back-button">⬅ Back to Home</Link>

          <Link
            to="/final-checkout"
            className={`checkout-btn ${items.length === 0 ? "disabled" : ""}`}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
