import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="hero-container">
      {/* Navigation */}
      <nav className="navbar">
        <img src="/images/logo.png" alt="Sustainable Futures" className="logo" />
        <ul className="nav-links">
          <li>HOME</li>
          <li>SHOP NOW</li>
          <li>INVEST</li>
          <li>CONTACT</li>
        </ul>
      </nav>

      {/* Main Hero Section */}
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="intro-text">INTRODUCING!</p>
          <h1 className="hero-title">SPOONIE BITES</h1>
          <p className="hero-description">
            Flavored Edible Spoons<br />
            Made with a wholesome fusion of sorghum and rice flour
          </p>
          <div className="button-group">
            <motion.button 
              className="primary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PRE-ORDER NOW
            </motion.button>
            <motion.button 
              className="secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/images/spoon5.png" alt="Edible Spoon" />
        </motion.div>
      </div>

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
