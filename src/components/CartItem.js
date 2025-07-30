import React from 'react';

function CartItem({ item, index, removeFromCart }) {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>₹{item.price}</p>
      <button onClick={() => removeFromCart(index)}>Remove</button>
    </div>
  );
}

export default CartItem;
