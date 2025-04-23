// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero    from './components/Hero';
import TetrisGrid from './components/TetrisGrid';
import Footer  from './components/Footer';
import TryOS   from './pages/Try';     // new page

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <TetrisGrid />
            <Footer />
          </>
        }/>
        <Route path="/try" element={<TryOS />} />
      </Routes>
    </>
  );
}

export default App;