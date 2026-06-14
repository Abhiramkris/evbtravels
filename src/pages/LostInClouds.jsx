import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Plane, ArrowLeft, ShieldAlert } from 'lucide-react';
import './LostInClouds.css';

export default function LostInClouds() {
  return (
    <main className="lost-page-container">
      {/* Animated Sky Elements */}
      <div className="sky-elements">
        <div className="floating-cloud cloud-1"><Cloud size={120} /></div>
        <div className="floating-cloud cloud-2"><Cloud size={80} /></div>
        <div className="floating-cloud cloud-3"><Cloud size={100} /></div>
        <div className="floating-plane"><Plane size={48} /></div>
      </div>

      {/* Main Glassmorphic Card */}
      <div className="lost-card glass-panel animate-fade-in">
        <div className="lost-icon-box">
          <ShieldAlert size={36} className="lost-alert-icon" />
        </div>
        
        <h1 className="lost-title">Lost in the Clouds</h1>
        <p className="lost-subtitle">Cruising at 35,000 feet...</p>
        
        <p className="lost-description">
          Our Login and Signup systems are currently cruising through the skies. We are bringing them back down to earth shortly. In the meantime, you can explore our routes, book airport rides, and check our fleet!
        </p>

        <div className="lost-actions">
          <Link to="/" className="btn-lost-home">
            <ArrowLeft size={16} />
            <span>Return to Safe Ground</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
