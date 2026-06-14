import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Star, Clock, Heart, Plane, Car, Train, Building2, MapPin } from 'lucide-react';
import Fleet from '../components/Fleet';
import './ServicesPage.css';

// Import images
import airportImg from '../assets/airport_transfer.png';
import outstationImg from '../assets/outstation_travel.png';
import corporateImg from '../assets/corporate_travel.png';
import weddingImg from '../assets/wedding_transportation.png';
import fullDayImg from '../assets/full_day_hire.png';
import railwayImg from '../assets/railway_transfer.png';

const SERVICES_DETAIL_DATA = {
  airport: {
    title: 'Kannur Airport Transfers',
    tagline: 'Never miss a flight at Kannur International Airport',
    description: 'We track your flight in real time and ensure your driver is ready — whether you’re departing or arriving. Enjoy stress-free airport pick-up and drop service with professional drivers who greet you, handle your baggage, and choose the optimal routes.',
    features: ['Flight tracking included', 'Up to 60 mins free waiting time', 'Meet & Greet support', 'Fixed flat rate pricing'],
    image: airportImg,
    icon: <Plane size={32} />
  },
  outstation: {
    title: 'Outstation Travel From Kannur',
    tagline: 'Explore destinations across South India comfortably',
    description: 'Explore destinations across South India with professional drivers and comfortable vehicles. From a quick trip to Kozhikode to a multi-day journey to Bangalore, we handle every route from Kannur. Safe, relaxed intercity rides for your family or team.',
    features: ['Round-trip or one-way options', 'Experienced highway drivers', 'Customizable itineraries', 'Wide fleet selection'],
    image: outstationImg,
    icon: <Car size={32} />
  },
  corporate: {
    title: 'Corporate Transportation',
    tagline: 'Reliable and professional transportation for Kannur businesses',
    description: 'Reliable and professional transportation for Kannur businesses, visiting executives and client transfers. Punctual, presentable and dependable. We offer corporate accounts, monthly billing, and professional executive travel matching your business standards.',
    features: ['Billed account options', 'Priority dispatch', 'Premium sedan vehicles', 'Confidential executive support'],
    image: corporateImg,
    icon: <Building2 size={32} />
  },
  railway: {
    title: 'Kannur Railway Station Transfers',
    tagline: 'Timely pickups and drops at Kannur Railway Station and district junctions',
    description: 'Timely pickups and drops at Kannur Railway Station and all major stations across the district — Thalassery, Payyanur, Valapattanam and more. Never rush to catch a train. Our drivers arrive 10 minutes early to ensure smooth drop-offs.',
    features: ['Covers all Kannur stations', 'Luggage handling help', 'Early morning pickups', 'Flexible scheduling'],
    image: railwayImg,
    icon: <Train size={32} />
  },
  wedding: {
    title: 'Wedding Transportation',
    tagline: 'Coordinated transport solutions for weddings and family events',
    description: 'Coordinated transport solutions for weddings and family events across Kannur district. Multi-vehicle arrangements handled with care and precision. We provide matching fleets of luxury sedans or large group cruisers to transport guests safely.',
    features: ['Dedicated event coordinators', 'Matching clean vehicles', 'Custom route planning', 'Flexible multi-day packages'],
    image: weddingImg,
    icon: <Heart size={32} />
  },
  fullday: {
    title: 'Full Day Hire',
    tagline: 'A dedicated vehicle and driver at your disposal all day',
    description: 'A dedicated vehicle and driver, all day, at your disposal. Explore Kannur, make multiple stops, or travel at your own pace — no rush, no meter. Ideal for shopping trips, city sightseeing, temple visits, and family day-outs.',
    features: ['Unlimited stops allowed', 'Driver stays with you', '8-Hour / 80km standard packs', 'No local meter stress'],
    image: fullDayImg,
    icon: <MapPin size={32} />
  }
};

export default function ServicesPage() {
  const { id } = useParams();

  // Check if we are viewing a specific service detail page
  const serviceDetail = id ? SERVICES_DETAIL_DATA[id] : null;

  return (
    <section className="services-page">
      <div className="container">
        {serviceDetail ? (
          /* Specific Service Detail View */
          <div className="service-detail-view animate-fade-in">
            <Link to="/services" className="btn-back-services">
              <ArrowLeft size={16} />
              <span>All Services</span>
            </Link>

            <div className="service-detail-grid">
              {/* Left Column: Details */}
              <div className="service-detail-info">
                <div className="service-detail-icon-box">
                  {serviceDetail.icon}
                </div>
                <h1 className="service-detail-title">{serviceDetail.title}</h1>
                <p className="service-detail-tagline">{serviceDetail.tagline}</p>
                <p className="service-detail-description">{serviceDetail.description}</p>
                
                <div className="service-features-list">
                  <h3 className="features-title">What is Included</h3>
                  <ul>
                    {serviceDetail.features.map((feature, idx) => (
                      <li key={idx}>
                        <ShieldCheck size={18} className="feature-check-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="btn-book-service">
                  <span>Book {serviceDetail.title}</span>
                  <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                </Link>
              </div>

              {/* Right Column: Image */}
              <div className="service-detail-media">
                <img 
                  src={serviceDetail.image} 
                  alt={serviceDetail.title} 
                  className="service-detail-img"
                />
              </div>
            </div>
          </div>
        ) : (
          /* General Services Grid View */
          <div className="services-general-view animate-fade-in">
            <div className="services-page-header">
              <h1 className="services-page-title">Our Services</h1>
              <p className="services-page-subtitle">
                Serving Kannur city, Kannur district and all major destinations across Kerala and South India.
              </p>
            </div>

            <div className="services-page-grid">
              {Object.entries(SERVICES_DETAIL_DATA).map(([key, item]) => (
                <Link to={`/services/${key}`} key={key} className="service-page-card">
                  <div className="service-page-card-img-container">
                    <img src={item.image} alt={item.title} className="service-page-card-img" />
                  </div>
                  <div className="service-page-card-content">
                    <div className="service-card-title-row">
                      <span className="service-card-icon-inline">{item.icon}</span>
                      <h3 className="service-card-title">{item.title}</h3>
                    </div>
                    <p className="service-card-desc">{item.description}</p>
                    <span className="service-card-link">Learn More <ArrowLeft size={14} style={{ transform: 'rotate(180deg)', marginLeft: '4px' }} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fleet vehicle cards rendered below in services */}
      <div className="services-fleet-container">
        <Fleet />
      </div>
    </section>
  );
}
