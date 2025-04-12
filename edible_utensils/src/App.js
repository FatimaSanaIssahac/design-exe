import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';


function App() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="App">
      {/* Hero Slider */}
       {/* NAVBAR */}
       <nav className="navbar">
  <img src="/images/logo.png" alt="Sustainable Futures Logo" className="navbar-logo" />
  <div className="nav-links">
    <span>HOME</span>
    <span>SHOP NOW</span>
    <span>INVEST</span>
    <span>CONTACT</span>
  </div>
</nav>

      <Slider {...sliderSettings}>
        {/* Slide 1: Spoonie Bites */}
        <div className="hero-slide spoonie-slide">
          <div className="hero-content">
            <div className="hero-text">
              <h4 className="tagline">INTRODUCING!</h4>
              <h1 className="headline">SPOONIE BITES</h1>
              <p className="subtext">
                Edible spoons made to scoop up your favorite treats<br />
                with no waste left behind
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">PRE-ORDER NOW</button>
                <button className="btn-secondary">LEARN MORE</button>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/spoon5.png" alt="Spoonie Bites" />
            </div>
          </div>
        </div>

        {/* Slide 2: Choco Crunch */}
        <div className="hero-slide choco-slide">
          <div className="hero-content">
            <div className="hero-text">
              <h4 className="tagline">INTRODUCING!</h4>
              <h1 className="headline">CHOCO CRUNCH</h1>
              <p className="subtext">
                Flavored Edible Cups<br />
                Made with a wholesome fusion of sorghum and rice flour
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">PRE-ORDER NOW</button>
                <button className="btn-secondary">LEARN MORE</button>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/coof3.png" alt="Choco Crunch" />
            </div>
          </div>
        </div>
      </Slider>
   
 
      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">FEATURES:</h2>
        <div className="features-container">
          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <img src="/images/round spoon.png" alt="Tasty Delight" />
            <h3>Tasty Delight</h3>
            <p>Our products are made to enhance your meal experience, whether you’re enjoying a warm comfort dish or a chilled dessert.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <img src="/images/round cup.png" alt="Nutrient-packed" />
            <h3>Nutrient-packed</h3>
            <p>Thoughtfully crafted with an organic fusion of sorghum and rice flour — delivering a crunchy, wholesome bite that’s as nourishing as it is sustainable.</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <img src="/images/round straw.png" alt="Sustainable" />
            <h3>Sustainable</h3>
            <p>No more single-use waste! Our products are fully biodegradable and harmless to the environment, breaking down naturally.</p>
          </motion.div>
        </div>
      </section>

      <section className="better-tomorrow-section">
  <h2 className="better-tomorrow-title">Bite into a better tomorrow!</h2>
  <div className="better-tomorrow-cards">
    
    {/* Card 1 */}
    <motion.div 
      className="card green-card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-bar"></div>
      <img src="/images/sp.png" alt="Spoonie Bites" className="card-image" />
      <h3 className="card-title">Spoonie Bites</h3>
      <button className="card-button green-btn">TAKE A BITE</button>
    </motion.div>

    {/* Card 2 */}
    <motion.div 
      className="card brown-card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-bar"></div>
      <img src="/images/COF.png" alt="ChocoCrunch" className="card-image" />
      <h3 className="card-title">ChocoCrunch</h3>
      <button className="card-button brown-btn">TAKE A BITE</button>
    </motion.div>

    {/* Card 3 */}
    <motion.div 
      className="card blue-card"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="card-bar"></div>
      <img src="/images/straw.png" alt="ScoopStraws" className="card-image" />
      <h3 className="card-title">ScoopStraws</h3>
      <button className="card-button blue-btn">TAKE A BITE</button>
    </motion.div>

  </div>
</section>
{/* Mission Section */}
<section className="mission-section">
  <div className="mission-content">
    <div className="mission-text">
      <h2>Sustainable choices start at the table</h2>
      <p>
        We are on a mission to reduce waste by creating edible cutlery that’s safe, 
        tasty, and leaves nothing behind.
      </p>
    </div>
    <div className="mission-image">
      <img src="/images/eco2.png" alt="Edible Cutlery and Coffee" />
    </div>
  </div>
</section>
      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-container">

          {/* Left Side Links */}
          <div className="footer-links">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>

          {/* Right Side Social and Subscribe */}
          <div className="footer-right">
            <h3>Be in the first to know</h3>
            <div className="social-icons">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-x-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>

            <div className="subscribe-form">
              <div className="input-wrapper">
                <input type="email" placeholder="Email Address" />
                <button type="submit">SUBSCRIBE</button>
              </div>
              <p className="subscribe-note">Get updates, coupons and news</p>
            </div>
          </div>

        </div>
      </footer>

    </div>
    
  );
}

export default App;
