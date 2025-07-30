import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FinalCheckout({ cartItems = [] }) {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ name: "", phone: "", address: "", pincode: "" });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const styles = {
    container: { maxWidth: 600, margin: "40px auto", padding: 20, background: "#fff7f0", borderRadius: 10, fontFamily: "sans-serif", boxShadow: "0 0 10px rgba(0,0,0,0.1)" },
    input: { width: "100%", padding: 10, marginTop: 8, marginBottom: 4, borderRadius: 6, border: "1px solid #ccc" },
    error: { color: "red", fontSize: 12, marginBottom: 8 },
    button: { background: "#ff6600", color: "#fff", padding: 12, fontSize: 16, border: "none", borderRadius: 8, cursor: "pointer", width: "100%", marginTop: 10 },
    popup: { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "#4ca468", color: "#012b01", padding: 30, borderRadius: 12, fontWeight: "bold", zIndex: 999 }
  };

  const validate = (name, value) => {
    if (name === "name" && !/^[A-Za-z ]+$/.test(value)) return "Enter valid name.";
    if (name === "phone" && !/^\d{10}$/.test(value)) return "Phone must be 10 digits.";
    if (name === "pincode" && !/^\d{6}$/.test(value)) return "Pincode must be 6 digits.";
    if (name === "address" && !value.trim()) return "Address is required.";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) }); // real-time validation
  };

  const handlePlaceOrder = () => {
    const newErrors = {};
    Object.entries(details).forEach(([key, val]) => {
      const err = validate(key, val);
      if (err) newErrors[key] = err;
    });
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
    } else {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/");
      }, 3000);
    }
  };

  const getTotal = () => cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.container}>
      <h2>🧾 Final Checkout</h2>

      {["name", "phone", "address", "pincode"].map((field) => (
        <div key={field}>
          <input
            style={styles.input}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={details[field]}
            onChange={handleChange}
          />
          {errors[field] && <div style={styles.error}>{errors[field]}</div>}
        </div>
      ))}

      <h3>🛒 Order Summary</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>{cartItems.map((item, i) => <li key={i}>{item.name} - ₹{item.price}</li>)}</ul>
      )}
      <p><strong>Total:</strong> ₹{getTotal()}</p>

      <h3>💳 Payment Method</h3>
      <label><input type="radio" checked readOnly /> Cash on Delivery</label>

      <button style={styles.button} onClick={handlePlaceOrder}>✅ Place Order</button>

      {showPopup && <div style={styles.popup}>THANK YOU!! ✅ Payment Successful</div>}
    </div>
  );
}

export default FinalCheckout;
