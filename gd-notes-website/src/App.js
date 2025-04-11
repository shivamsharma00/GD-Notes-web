// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import './styles/global.css'; // Import global styles

function App() {
  // No theme state needed anymore

  return (
    <div className="App">
      <Header /> {/* Header is always the same */}
      <main>
        <Hero />
        {/* Features now includes Download and About sections */}
        <Features />
      </main>
      {/* Optional: Add a Footer component here */}
    </div>
  );
}

export default App;