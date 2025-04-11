// src/components/FeatureCard/FeatureCard.js
import React from 'react';
import styles from './FeatureCard.module.css';

const FeatureCard = ({ title, children, gradientStyle, cardId }) => {
  // Determine text color based on background lightness (simple heuristic)
  // A more robust solution might involve calculating luminance
  const isDarkBackground = gradientStyle?.background?.includes('#1') || gradientStyle?.background?.includes('#2') || gradientStyle?.background?.includes('#3') || gradientStyle?.background?.includes('#4') || gradientStyle?.background?.includes('#080d14');
  const textColor = isDarkBackground ? '#FFFFFF' : '#343a40'; // White for dark, dark grey for light

  const combinedStyle = {
    ...gradientStyle, // Apply the background gradient
    color: textColor, // Apply calculated text color
  };

  return (
    // Add the id if provided (for anchor links)
    <div id={cardId} className={styles.card} style={combinedStyle}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>
        {children || 'Placeholder feature description.'}
      </div>
    </div>
  );
};

export default FeatureCard;