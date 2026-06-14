import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Mail } from 'lucide-react';
import { submitContactForm } from '../utils/api';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    const success = await submitContactForm({
      name: 'Newsletter Subscriber',
      email: email,
      subject: 'Newsletter Subscription',
      message: `User subscribed to EVB Travels newsletter: ${email}`
    });

    if (success) {
      alert('Thank you for subscribing to EVB Travels newsletter!');
      setEmail('');
    } else {
      alert('Subscription failed. Please try again.');
    }
  };

  return (
    <footer className="footer-el" id="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <Navigation size={24} className="footer-logo-dot" fill="currentColor" />
              <span>EVB Travels</span>
            </Link>
            <p className="footer-desc">
              Providing premium airport transfers, outstation journeys, and comfortable rides in and around Kannur with professional drivers.
            </p>
            <div className="footer-socials">
              <a href="#twitter" className="social-link" aria-label="Follow us on Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#instagram" className="social-link" aria-label="Follow us on Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#facebook" className="social-link" aria-label="Follow us on Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li className="footer-link-item"><Link to="/services/airport">Airport Transfers</Link></li>
              <li className="footer-link-item"><Link to="/services/outstation">Outstation Rides</Link></li>
              <li className="footer-link-item"><Link to="/services/fullday">Local Rentals</Link></li>
              <li className="footer-link-item"><Link to="/services/corporate">Corporate Travel</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li className="footer-link-item"><Link to="/about">About Us</Link></li>
              <li className="footer-link-item"><Link to="/about">FAQ</Link></li>
              <li className="footer-link-item"><Link to="/contact">Contact</Link></li>
              <li className="footer-link-item"><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-newsletter">
            <h4 className="footer-col-title">Newsletter</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '8px' }}>
              Subscribe for offers and travel updates.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <label htmlFor="newsletter-email" className="visually-hidden">Email Address</label>
              <input
                id="newsletter-email"
                type="email"
                className="newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe to newsletter">
                <Mail size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} EVB Travels. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/about">Privacy Policy</Link>
            <Link to="/about">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
