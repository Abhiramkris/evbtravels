import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

import airportImg from '../assets/airport_transfer.png';
import outstationImg from '../assets/outstation_travel.png';
import corporateImg from '../assets/corporate_travel.png';
import weddingImg from '../assets/wedding_transportation.png';
import fullDayImg from '../assets/full_day_hire.png';
import railwayImg from '../assets/railway_transfer.png';

const SERVICES_DATA = [
  {
    id: 'airport',
    title: 'Kannur Airport Transfers',
    description: 'Reliable pickups and drops at Kannur International Airport with real-time flight tracking.',
    image: airportImg
  },
  {
    id: 'outstation',
    title: 'Outstation Travel',
    description: 'Comfortable journeys from Kannur to Kochi, Wayanad, Kozhikode, Bangalore and beyond.',
    image: outstationImg
  },
  {
    id: 'corporate',
    title: 'Corporate Travel',
    description: 'Professional transport for businesses and executives across Kannur and North Kerala.',
    image: corporateImg
  },
  {
    id: 'wedding',
    title: 'Wedding Transportation',
    description: 'Coordinated vehicle fleets for weddings and events across Kannur district.',
    image: weddingImg
  },
  {
    id: 'fullday',
    title: 'Full Day Hire',
    description: 'Your vehicle. Your driver. Your schedule — anywhere in and around Kannur.',
    image: fullDayImg
  },
  {
    id: 'railway',
    title: 'Railway Transfers',
    description: 'Convenient pickups and drops at Kannur Railway Station and nearby stations.',
    image: railwayImg
  }
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">What We Do Best</h2>
          <p className="services-subtitle">
            Experience premium, hassle-free private transit from Kannur tailored perfectly to your itinerary.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service) => (
            <Link to={`/services/${service.id}`} key={service.id} className="service-card animate-fade-in">
              <div className="service-img-container">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-img" 
                  loading="lazy"
                />
              </div>
              <div className="service-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <span className="service-card-link" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--brand-emerald)', marginTop: '8px', display: 'inline-flex', alignItems: 'center' }}>
                  Learn More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export { SERVICES_DATA };
