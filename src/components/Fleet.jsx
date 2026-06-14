import React from 'react';
import { Shield, Phone, MessageSquare, Star } from 'lucide-react';
import './Fleet.css';

import hatchbackImg from '../assets/hatchback_render.png';
import sedanImg from '../assets/sedan_render.png';
import suvImg from '../assets/suv_render.png';
import cruiserImg from '../assets/cruiser_render.png';

const FLEET_DATA = [
  {
    id: 'innova',
    name: 'Toyota Innova Crysta',
    badge: 'Premium MPV',
    specs: 'Toyota • 7 Seats • White • AC',
    bestForTags: ['Family Vacations', 'Airport Transfers', 'Long Distance'],
    keyFeaturesTags: ['Spacious Seating', 'Premium Comfort', 'Ideal for Groups'],
    rating: '4.9',
    trips: '1,200+ trips',
    image: suvImg
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga',
    badge: 'Value MPV',
    specs: 'Suzuki • 6 Seats • Silver • AC',
    bestForTags: ['Family Trips', 'Day Outings', 'Group Travel'],
    keyFeaturesTags: ['Comfortable Cabin', 'Family Friendly', 'Excellent Value'],
    rating: '4.8',
    trips: '950+ trips',
    image: cruiserImg
  },
  {
    id: 'dzire',
    name: 'Swift Dzire',
    badge: 'Compact Sedan',
    specs: 'Suzuki • 4 Seats • White • AC',
    bestForTags: ['Solo Travel', 'Couples', 'City Runs'],
    keyFeaturesTags: ['Budget Friendly', 'Fuel Efficient', 'Kannur Local'],
    rating: '4.9',
    trips: '2,100+ trips',
    image: hatchbackImg
  },
  {
    id: 'etios',
    name: 'Toyota Etios',
    badge: 'Comfort Sedan',
    specs: 'Toyota • 4 Seats • Silver • AC',
    bestForTags: ['Intercity Rides', 'Airport Transfers'],
    keyFeaturesTags: ['Reliable', 'Comfortable Seating', 'Long-Trip Ready'],
    rating: '4.7',
    trips: '1,500+ trips',
    image: sedanImg
  },
  {
    id: 'ciaz',
    name: 'Maruti Ciaz',
    badge: 'Executive Sedan',
    specs: 'Suzuki • 4 Seats • Blue Grey • AC',
    bestForTags: ['Corporate Travel', 'VIP Guests', 'Executive Rides'],
    keyFeaturesTags: ['Premium Interior', 'Executive Comfort', 'Professional Look'],
    rating: '4.9',
    trips: '800+ trips',
    image: sedanImg
  }
];

export default function Fleet() {
  const handleActionClick = (vehicleName, type) => {
    alert(`Thank you for choosing ${vehicleName}. Redirecting you to contact our team via ${type}...`);
  };

  return (
    <section className="fleet-section" id="outstation">
      <div className="container">
        <div className="fleet-header">
          <h2 className="fleet-title">Our Fleet</h2>
          <p className="fleet-subtitle">
            Whether you’re travelling alone, with family or in a group, we have the right vehicle for you.
          </p>
        </div>

        <div className="fleet-grid">
          {FLEET_DATA.map((item) => (
            <div key={item.id} className="fleet-card animate-fade-in">
              {/* Card Top: Details and PNG Render */}
              <div className="card-top">
                <div className="card-top-left">
                  <span className="card-badge">{item.badge}</span>
                  <h3 className="card-vehicle-name">{item.name}</h3>
                  <span className="card-vehicle-specs">{item.specs}</span>
                </div>
                <div className="card-top-right">
                  <img src={item.image} alt={item.name} className="fleet-car-img" />
                </div>
              </div>

              {/* Divider */}
              <div className="card-divider"></div>

              {/* Card Body: Bubble Tags */}
              <div className="card-body">
                <div className="tag-section">
                  <span className="tag-section-title">Best For</span>
                  <div className="tag-container">
                    {item.bestForTags.map((tag, idx) => (
                      <span key={idx} className="tag-bubble best-for-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="tag-section">
                  <span className="tag-section-title">Key Features</span>
                  <div className="tag-container">
                    {item.keyFeaturesTags.map((tag, idx) => (
                      <span key={idx} className="tag-bubble feature-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="card-divider"></div>

              {/* Card Footer: Rating & Actions Row */}
              <div className="card-footer-row">
                <div className="driver-rating-info">
                  <div className="verified-badge">
                    <Shield size={14} />
                    <span>EVB Verified</span>
                  </div>
                  <div className="rating-pill">
                    <Star size={12} fill="#fbbf24" stroke="#fbbf24" />
                    <span>{item.rating}</span>
                    <span className="trip-count">({item.trips})</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="card-actions">
                  <button 
                    className="action-btn" 
                    onClick={() => handleActionClick(item.name, 'chat')}
                    aria-label={`Chat with support about ${item.name}`}
                  >
                    <MessageSquare size={16} />
                  </button>
                  <button 
                    className="action-btn" 
                    onClick={() => handleActionClick(item.name, 'call')}
                    aria-label={`Call support to book ${item.name}`}
                  >
                    <Phone size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
