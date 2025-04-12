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
        {/* Text Section */}
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

        {/* Spoon Image */}
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
    </div>
  );
}

export default App;
