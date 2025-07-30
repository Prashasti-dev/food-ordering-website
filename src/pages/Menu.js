import React from 'react';
import FoodItem from '../components/FoodItem';

function Menu({ foodData, addToCart }) {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="food-list">
        {foodData.map((item) => (
          <FoodItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
