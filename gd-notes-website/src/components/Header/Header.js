// src/components/Header/Header.js
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.appHeader}>
      <div className={styles.logo}>GD</div>
      <nav className={styles.navLinks}>
        {/* Point 'Home' to the top of the page */}
        <a href="#">Home</a>
        {/* Point 'Download' to the section with id="download" */}
        <a href="#download">Download</a>
        {/* Point 'About Us' to the section with id="about" */}
        <a href="#about">About us</a>
      </nav>
    </header>
  );
};

export default Header;