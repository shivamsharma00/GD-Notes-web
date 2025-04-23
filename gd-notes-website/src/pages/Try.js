import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Try.css';

const osOptions = [
  { name: 'Windows', icon: '🪟', link: 'https://github.com/shivamsharma/GD-Notes/releases/latest/download/MyApp%20Setup.exe' },
  { name: 'macOS',   icon: '🍎', link: 'https://github.com/shivamsharma/GD-Notes/releases/latest/download/MyApp.dmg' },
  // { name: 'Linux',   icon: '🐧', link: '#' },
];

const Try = () => (
  <section className="try-page">
    <h2>Choose Your Platform</h2>
    <p>Select the version that fits your system. Download, install, and start taking better notes.</p>

    <div className="try-grid">
      {osOptions.map(o => (
        <a key={o.name} href={o.link} className="try-card">
          <div className="try-card__icon">{o.icon}</div>
          <h3>{o.name}</h3>
          <p>Download the {o.name} installer.</p>
        </a>
      ))}
    </div>

    <Link to="/" className="back-link">← Back to Home</Link>
  </section>
);

export default Try;