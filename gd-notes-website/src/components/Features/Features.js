// src/components/Features/Features.js
import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import DownloadButton from '../DownloadButton/DownloadButton';
import { COLOR_THEMES } from '../../constants'; // Import themes
import styles from './Features.module.css';

const Features = () => {

  // Prepare cards for all themes (light and dark variants)
  const themeCards = Object.entries(COLOR_THEMES).flatMap(([themeName, variants]) => {
    const cards = [];

    // Light variant card
    if (variants.light && variants.light.length >= 4) {
        cards.push({
            id: `${themeName}-light`,
            title: `${themeName.charAt(0).toUpperCase() + themeName.slice(1)} (Light)`,
            style: { background: `linear-gradient(to bottom, ${variants.light[0]}, ${variants.light[3]})` },
            content: `Example using ${themeName} light theme colors.`
        });
    }
    // Dark variant card
    if (variants.dark && variants.dark.length >= 4) {
         cards.push({
            id: `${themeName}-dark`,
            title: `${themeName.charAt(0).toUpperCase() + themeName.slice(1)} (Dark)`,
            style: { background: `linear-gradient(to bottom, ${variants.dark[0]}, ${variants.dark[3]})` },
            content: `Example using ${themeName} dark theme colors.`
        });
    }
    return cards;
  });

  // Define the specific "Download" card style (e.g., Sunset Light)
  const downloadCardStyle = {
      background: 'linear-gradient(to bottom, #FFF3E0, #FFB74D)', // Sunset light
  };

  return (
    // Use the .container class for centering and padding
    <div className={`container ${styles.featuresContainer}`}>

      {/* Download Section Card - Assign id="download" */}
      <FeatureCard
        title="Download Latest Version"
        gradientStyle={downloadCardStyle}
        cardId="download" /* ID for the anchor link */
      >
         <div className={styles.downloadLinks}>
              <DownloadButton os="windows" />
              <DownloadButton os="mac" />
              {/* Add Linux button if needed */}
              {/* <DownloadButton os="linux" /> */}
         </div>
         <p className={styles.releaseInfo}>Get the latest stable release directly.</p>
         {/* You could add a link to the release page itself here too */}
      </FeatureCard>

      {/* General Feature Card */}
       <FeatureCard
        title="Key Feature Example"
        gradientStyle={{background: 'linear-gradient(to bottom, #E8F5E9, #81C784)'}} /* Nature Light */
       >
           Describe one of the main selling points of your application here. Make it concise and compelling.
       </FeatureCard>

       {/* Add an About Us section card - Assign id="about" */}
       <FeatureCard
          title="About Us"
          gradientStyle={{background: 'linear-gradient(to bottom, #E6F7FF, #99DBFF)'}} /* Cool Light */
          cardId="about" /* ID for the anchor link */
       >
           Briefly introduce yourself or the purpose behind the app. Keep it short and friendly. You can link to a full 'About' page if needed.
       </FeatureCard>


      {/* Display all theme examples */}
      <h2 className={styles.sectionTitle}>Theme Examples</h2>
      <div className={styles.featuresGrid}>
        {themeCards.map(card => (
          <FeatureCard key={card.id} title={card.title} gradientStyle={card.style}>
            {card.content}
          </FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Features;