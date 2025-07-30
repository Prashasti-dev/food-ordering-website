import "./HeroBanner.css";
import burgerImage from "./burger.jpeg";

function HeroBanner({ onExploreClick }) {
  return (
    <section className="hero">
      <img src={burgerImage} alt="Burger" className="hero-img" />
      <div className="hero-content">
        <h1>Order Delicious Food Now 🍴</h1>
        <p>Fresh, Fast, and at Your Doorstep</p>
        <button onClick={onExploreClick}>Explore Menu</button>
      </div>
    </section>
  );
}

export default HeroBanner;
