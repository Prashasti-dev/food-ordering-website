function FoodItem({ name, price }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px",
      width: "200px",
      textAlign: "center"
    }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default FoodItem;
