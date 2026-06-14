import React, { useState } from 'react';
import { Menu, X, Navigation } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header glass-panel">
      <div className="container header-container">
        {/* Logo */}
        <a href="/" className="logo-link" id="nav-logo">
          <Navigation size={24} className="logo-dot" fill="currentColor" />
          <span>EVB Travels</span>
        </a>

        {/* Desktop Nav */}
        <ul className="nav-links">
          <li><a href="#ride" className="nav-link">Ride</a></li>
          <li><a href="#drive" className="nav-link">Drive</a></li>
          <li><a href="#outstation" className="nav-link">Outstation</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#help" className="nav-link">Help</a></li>
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <button className="btn-login" id="header-login-btn">Log in</button>
          <button className="btn-signup" id="header-signup-btn">Sign up</button>
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
          <li><a href="#ride" className="mobile-nav-link" onClick={toggleMenu}>Ride</a></li>
          <li><a href="#drive" className="mobile-nav-link" onClick={toggleMenu}>Drive</a></li>
          <li><a href="#outstation" className="mobile-nav-link" onClick={toggleMenu}>Outstation</a></li>
          <li><a href="#about" className="mobile-nav-link" onClick={toggleMenu}>About</a></li>
          <li><a href="#help" className="mobile-nav-link" onClick={toggleMenu}>Help</a></li>
          <div className="mobile-actions">
            <button className="btn-login" onClick={toggleMenu}>Log in</button>
            <button className="btn-signup" onClick={toggleMenu}>Sign up</button>
          </div>
        </ul>
      </div>
    </header>
  );
}
