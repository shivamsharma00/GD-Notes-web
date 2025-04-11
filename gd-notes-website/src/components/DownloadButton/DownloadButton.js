// src/components/DownloadButton/DownloadButton.js
import React, { useState, useEffect } from 'react';
import { getLatestReleaseInfo } from '../../api/github';
import styles from './DownloadButton.module.css';

const DownloadButton = ({ os }) => {
  const [url, setUrl] = useState('#');
  const [version, setVersion] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true; // Prevent state update on unmounted component
    const fetchUrl = async () => {
      setLoading(true);
      setError(false);
      const releaseInfo = await getLatestReleaseInfo();

      if (isMounted) {
          if (releaseInfo) {
            const downloadUrl = os === 'windows' ? releaseInfo.windowsUrl : releaseInfo.macUrl;
            if (downloadUrl) {
              setUrl(downloadUrl);
              setVersion(releaseInfo.version); // Store version
            } else {
              console.warn(`No download asset found for ${os} in release ${releaseInfo.version}.`);
              setError(true); // Asset not found for this OS
            }
          } else {
            setError(true); // API fetch failed or no release found
          }
          setLoading(false);
      }
    };

    fetchUrl();
    return () => { isMounted = false }; // Cleanup function
  }, [os]); // Re-run if os prop changes (though unlikely here)

  const osName = os === 'windows' ? 'Windows' : 'Mac';

  if (loading) {
    return <div className={styles.downloadItem}>→ {osName} <span className={styles.loading}>(Loading...)</span></div>;
  }

  if (error || url === '#') {
    return <div className={`${styles.downloadItem} ${styles.error}`}>→ {osName} (Not Available)</div>;
  }

  return (
    <a href={url} className={styles.downloadItem} target="_blank" rel="noopener noreferrer">
      → {osName} <span className={styles.version}>({version})</span>
    </a>
  );
};

export default DownloadButton;