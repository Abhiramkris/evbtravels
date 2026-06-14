import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import BookingForm from './BookingForm';
import VehicleCards, { VEHICLES } from './VehicleCards';
import mapIllustration from '../assets/map_illustration.png';
import './Hero.css';

export default function Hero() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const hasRoute = from.trim() !== '' && to.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!from || !to || !date) {
      alert('Please fill out all fields in the booking form.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate booking action
    setTimeout(() => {
      const vehicleName = VEHICLES.find(v => v.id === selectedVehicle)?.name || 'Ride';
      setBookingDetails({
        from,
        to,
        date,
        vehicle: vehicleName
      });
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setFrom('');
    setTo('');
    setDate('');
    setBookingDetails(null);
  };

  return (
    <section className="hero-section" id="ride">
      {/* Background/Overlay Visual container */}
      <div className="hero-visual">
        <img 
          src={mapIllustration} 
          alt="Kannur Kerala Map Illustration" 
          className="map-image-el" 
        />
        <div className="hero-gradient-overlay"></div>
      </div>

      <div className="container hero-container">
        {/* Left Side: Booking form and description */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title animate-fade-in">
              Where Are You Travelling in Kannur Today?
            </h1>
            <p className="hero-description animate-fade-in">
              Book airport transfers, outstation journeys, local rides, family vacations and business travel from Kannur — with trusted drivers and comfortable vehicles.
            </p>
          </div>

          {/* Booking Widget Form */}
          {bookingDetails ? (
            <div className="booking-widget-card glass-panel animate-fade-in">
              <div className="success-banner">
                <CheckCircle2 size={20} style={{ color: 'var(--brand-emerald)' }} />
                <span>Ride requested successfully!</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
                <p style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--text-primary)' }}>Booking Summary</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                  <p><strong>From:</strong> {bookingDetails.from}</p>
                  <p><strong>To:</strong> {bookingDetails.to}</p>
                  <p><strong>Date:</strong> {bookingDetails.date}</p>
                  <p><strong>Class:</strong> {bookingDetails.vehicle}</p>
                </div>
              </div>
              <button className="btn-book-ride" onClick={handleReset} id="book-another-btn">
                Book Another Ride
              </button>
            </div>
          ) : (
            <form className="booking-widget-card glass-panel animate-fade-in" onSubmit={handleSubmit}>
              <BookingForm
                from={from}
                setFrom={setFrom}
                to={to}
                setTo={setTo}
                date={date}
                setDate={setDate}
              />

              <VehicleCards
                selectedVehicle={selectedVehicle}
                setSelectedVehicle={setSelectedVehicle}
                hasRoute={hasRoute}
              />

              <button type="submit" className="btn-book-ride" id="book-ride-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>Requesting Ride...</span>
                ) : (
                  <>
                    <span>Request {VEHICLES.find(v => v.id === selectedVehicle)?.name || 'Ride'}</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem' }} className="animate-fade-in">
            <ShieldCheck size={16} style={{ color: 'var(--brand-emerald)' }} />
            <span>Verified driver background checks & flat rate pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
