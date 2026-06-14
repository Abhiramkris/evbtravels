import React from 'react';
import { Target, Heart, CheckCircle2 } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Side: About Text */}
          <div className="about-content animate-fade-in">
            <h2 className="about-title">About EVB Tours and Travels</h2>
            <p className="about-desc">
              EVB Tours and Travels was founded in Kannur with a simple mission — to provide reliable, comfortable and trustworthy transportation across Kerala and beyond.
            </p>
            <p className="about-desc">
              Rooted in Kannur, we bring deep local knowledge of North Kerala’s roads and routes together with professional service and carefully maintained vehicles. The result is a travel experience that feels effortless from the moment you book to the moment you arrive.
            </p>
            <p className="about-desc">
              Whether you’re travelling for business, a family occasion, a leisure trip or an airport transfer, our team is committed to getting you there safely, comfortably and on time.
            </p>
          </div>

          {/* Right Side: Mission & Promise */}
          <div className="about-cards animate-fade-in">
            {/* Our Mission */}
            <div className="about-card glass-panel">
              <div className="about-card-header">
                <Target size={24} className="about-card-icon" />
                <h3 className="about-card-title">Our Mission</h3>
              </div>
              <p className="about-card-text">
                To be Kannur’s most trusted cab service — delivering safe, dependable and comfortable journeys backed by local expertise and genuine customer care.
              </p>
            </div>

            {/* Our Promise */}
            <div className="about-card glass-panel">
              <div className="about-card-header">
                <Heart size={24} className="about-card-icon promise-icon" />
                <h3 className="about-card-title">Our Promise</h3>
              </div>
              <ul className="promise-list">
                <li className="promise-item">
                  <CheckCircle2 size={16} className="promise-check" />
                  <span>Every journey from Kannur matters.</span>
                </li>
                <li className="promise-item">
                  <CheckCircle2 size={16} className="promise-check" />
                  <span>Every customer matters.</span>
                </li>
                <li className="promise-item">
                  <CheckCircle2 size={16} className="promise-check" />
                  <span>Every destination matters.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
