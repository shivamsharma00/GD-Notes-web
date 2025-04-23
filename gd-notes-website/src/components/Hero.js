// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link }   from 'react-router-dom';
import '../styles/Hero.css';
import logo from '../assets/logo.ico';

const Hero = () => (
  <section className="hero">
    <motion.div
      className="hero__content"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img src={logo} alt="GD Notes logo" className="hero__logo" />
      <h1>Welcome to GD Notes</h1>
      <p>Organize your thoughts. Elevate your productivity.</p>
      <Link to="/try" className="hero__button">Give it a try →</Link>
    </motion.div>
  </section>
);

export default Hero;