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
    </div>
  );
}

export default App;
