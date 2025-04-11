// src/api/github.js
import { GITHUB_USER, GITHUB_REPO } from '../constants';

export const getLatestReleaseInfo = async () => {
  // Make sure the user and repo names are set in constants.js
  if (!GITHUB_USER || GITHUB_USER === 'YOUR_GITHUB_USERNAME' || !GITHUB_REPO || GITHUB_REPO === 'YOUR_STICKY_NOTES_REPO_NAME') {
      console.error("GitHub username or repository name not set in src/constants.js");
      return null;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/releases/latest`);

    if (!response.ok) {
      if (response.status === 404) {
        console.error(`No latest release found for repository: ${GITHUB_USER}/${GITHUB_REPO}. Make sure the repository is public and has at least one release marked as 'latest'.`);
      } else if (response.status === 403) {
           console.warn('GitHub API rate limit likely exceeded or private repository access issue.');
      } else {
          throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
      }
      return null; // Return null on error
    }

    const data = await response.json();

    // Find download URLs (customize asset matching if needed)
    const assets = data.assets || [];
    const windowsAsset = assets.find(asset => asset.name.endsWith('.exe') || asset.name.toLowerCase().includes('win'));
    const macAsset = assets.find(asset => asset.name.endsWith('.dmg') || asset.name.toLowerCase().includes('mac'));
    // Add Linux (.AppImage, .deb, etc.) if needed:
    // const linuxAsset = assets.find(asset => asset.name.endsWith('.AppImage') || asset.name.endsWith('.deb'));

    return {
      version: data.tag_name,
      releaseDate: data.published_at,
      releaseNotes: data.body,
      windowsUrl: windowsAsset?.browser_download_url,
      macUrl: macAsset?.browser_download_url,
      // linuxUrl: linuxAsset?.browser_download_url,
      releasePageUrl: data.html_url // Link to the release page itself
    };
  } catch (error) {
    console.error("Failed to fetch latest release info:", error);
    return null; // Return null on error
  }
};