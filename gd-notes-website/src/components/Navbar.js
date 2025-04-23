// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navbar.css';
import logo from '../assets/logo.ico';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen]   = useState(false);
  const { pathname }          = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="navbar__brand">
        <img src={logo} alt="GD Notes logo" className="navbar__logo" />
      </Link>

      <button
        className="navbar__toggle"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen(o => !o)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div className={`navbar__links ${isOpen ? 'open' : ''}`}>
        <Link to="/"    className={pathname === '/'    ? 'active' : ''}>Home</Link>
        <Link to="/try" className={pathname === '/try' ? 'active' : ''}>Try</Link>
      </div>
    </nav>
  );
}

export default Navbar;