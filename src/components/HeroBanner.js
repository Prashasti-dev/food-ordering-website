import "./HeroBanner.css";

function HeroBanner({ onExploreClick }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Delicious <br />
          <span>Food Dishes</span>
        </h1>
        <p>
          Indulge your senses and embark on a gastronomic journey with our exquisite flavors.
        </p>
        <div className="hero-buttons">
          <button className="order-btn" onClick={onExploreClick}>Explore Now</button>
        </div>
        <div className="hero-rating">
          <span className="stars">⭐ 4.9</span>
          <span>(28k reviews)</span>
        </div>
      </div>

      
    </section>
  );
}

export default HeroBanner;
