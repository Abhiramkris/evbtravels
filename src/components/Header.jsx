import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Navigation } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header glass-panel">
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo-link" id="nav-logo">
          <Navigation size={24} className="logo-dot" fill="currentColor" />
          <span>EVB Travels</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/services" className="nav-link">Services</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <Link to="/lost-in-clouds" className="btn-login" id="header-login-btn">Log in</Link>
          <Link to="/lost-in-clouds" className="btn-signup" id="header-signup-btn">Sign up</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMenu} 
          aria-expanded={isOpen} 
          aria-label="Toggle main menu"
          id="mobile-nav-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown Menu */}
        <ul className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobile-dropdown-menu">
          <li><Link to="/" className="mobile-nav-link" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/services" className="mobile-nav-link" onClick={toggleMenu}>Services</Link></li>
          <li><Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/contact" className="mobile-nav-link" onClick={toggleMenu}>Contact</Link></li>
          <div className="mobile-actions">
            <Link to="/lost-in-clouds" className="btn-login" onClick={toggleMenu}>Log in</Link>
            <Link to="/lost-in-clouds" className="btn-signup" onClick={toggleMenu}>Sign up</Link>
          </div>
        </ul>
      </div>
    </header>
  );
}
