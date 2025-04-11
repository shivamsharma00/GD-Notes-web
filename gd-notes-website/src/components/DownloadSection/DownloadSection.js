import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard'; // Reuse FeatureCard for styling
import DownloadButton from '../DownloadButton/DownloadButton';
import styles from './DownloadSection.module.css';

// Example gradient for the download card (e.g., Sunset Light)
const downloadCardStyle = {
    background: 'linear-gradient(to bottom, #FFF3E0, #FFB74D)',
    color: '#000000' // Assuming light mode
    // Add dark mode styles potentially via className and CSS
};


const DownloadSection = () => {
  return (
    // Use FeatureCard structure but customize content
    <FeatureCard title="Download" customStyle={downloadCardStyle}>
       <div className={styles.downloadLinks}>
            <DownloadButton os="windows" />
            <DownloadButton os="mac" />
            {/* Add other OS if needed */}
       </div>
       {/* Optionally display latest version or release date */}
    </FeatureCard>
  );
};

export default DownloadSection;