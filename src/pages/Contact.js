// src/pages/Contact.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/"); // Redirect to homepage
  };

  const handleBack = () => {
    navigate(-1); // Navigate to previous page
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <p>📞 Phone: +91 9876543210</p>
        <p>✉️ Email: support@foodexpress.com</p>
        <p>📍 Location: Lucknow, Uttar Pradesh, India</p>
      </div>

      {/* Testimonials */}
      <div className="testimonial-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          <div className="testimonial-card slide-in">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
              alt="User"
              className="testimonial-img"
            />
            <p>"Amazing food and super fast delivery. Loved the butter chicken!"</p>
            <span>⭐️⭐️⭐️⭐️⭐️</span>
            <p>- Priya Sharma</p>
          </div>
          <div className="testimonial-card slide-in">
            <p>"Great variety and the packaging was neat. Will order again!"</p>
            <span>⭐️⭐️⭐️⭐️</span>
            <p>- Rajat Verma</p>
          </div>
          <div className="testimonial-card slide-in">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="User"
              className="testimonial-img"
            />
            <p>"Tastes like home-cooked food. Paneer tikka was just wow."</p>
            <span>⭐️⭐️⭐️⭐️⭐️</span>
            <p>- Anjali Gupta</p>
          </div>
        </div>
      </div>

      {/* Advertisement */}
      <div className="advertisement-section">
        <div className="ad-overlay">
          <h2>Deliciousness Delivered Fast 🍛</h2>
          <p>Order authentic Indian meals cooked fresh with love and flavor.</p>
          <button className="order-button" onClick={handleOrderNow}>
            Order Now
          </button>
        </div>
      </div>

      {/* Back Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={handleBack} className="back-button">
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
};

export default Contact;
