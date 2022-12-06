import heroImage from '../../assets/images/hero-image.png';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={heroImage} alt="Hero Image" />
      </div>
      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
