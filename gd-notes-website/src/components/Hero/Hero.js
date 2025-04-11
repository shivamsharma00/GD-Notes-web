// src/components/Hero/Hero.js
import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>Motto</h1>
        <p>Simple as better.</p>
      </div>
    </section>
  );
};

export default Hero;