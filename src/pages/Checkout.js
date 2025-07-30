import React from "react";
import "./Contact.css"; // Create this file next

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>📞 Contact Us</h1>
      <div className="contact-info">
        <p><strong>Address:</strong> 123 Fake Street, New Delhi, India</p>
        <p><strong>Email:</strong> support@shopit.com</p>
        <p><strong>Phone:</strong> +91 9876543210</p>
      </div>

      <hr />

      <h2>💬 What our customers say</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p>🧡 “Amazing service and super fast delivery!”</p>
          <span>— Riya Sharma</span>
        </div>
        <div className="testimonial">
          <p>👍 “Great food quality and user-friendly site.”</p>
          <span>— Aarav Mehta</span>
        </div>
        <div className="testimonial">
          <p>⭐ “Absolutely loved the user experience!”</p>
          <span>— Sneha Kapoor</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
