import React from 'react';
import { UserCheck, Sparkles, Coins, Zap, Clock, Plane } from 'lucide-react';
import './WhyChooseUs.css';

const CHOOSE_DATA = [
  {
    id: 'drivers',
    icon: <UserCheck size={24} />,
    title: 'Professional Drivers',
    description: 'Licensed, verified drivers who know Kannur roads and prioritise your safety.'
  },
  {
    id: 'vehicles',
    icon: <Sparkles size={24} />,
    title: 'Clean Vehicles',
    description: 'Well-maintained, air-conditioned vehicles inspected regularly.'
  },
  {
    id: 'pricing',
    icon: <Coins size={24} />,
    title: 'Transparent Pricing',
    description: 'Know your fare before the trip begins — no surprises.'
  },
  {
    id: 'confirmation',
    icon: <Zap size={24} />,
    title: 'Instant Confirmation',
    description: 'Receive booking confirmation within minutes, wherever you are in Kannur.'
  },
  {
    id: 'availability',
    icon: <Clock size={24} />,
    title: '24/7 Availability',
    description: 'Available around the clock for early morning flights and late night arrivals.'
  },
  {
    id: 'airport',
    icon: <Plane size={24} />,
    title: 'Airport Specialists',
    description: 'On-time pickups with live flight monitoring at Kannur International Airport.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="choose-section" id="why-choose-us">
      <div className="container">
        <div className="choose-header">
          <h2 className="choose-title">Why Kannur Travellers Choose EVB</h2>
          <p className="choose-subtitle">
            We are dedicated to providing the safest, most reliable, and comfortable private transport in North Kerala.
          </p>
        </div>

        <div className="choose-grid">
          {CHOOSE_DATA.map((item) => (
            <div key={item.id} className="choose-card animate-fade-in">
              <div className="choose-icon-box animate-float" style={{ animationDelay: `${CHOOSE_DATA.indexOf(item) * 0.1}s` }}>
                {item.icon}
              </div>
              <div className="choose-card-content">
                <h3 className="choose-card-title">{item.title}</h3>
                <p className="choose-card-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
