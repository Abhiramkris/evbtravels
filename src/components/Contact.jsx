import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, PhoneCall, MapPin, Clock, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [activeTab, setActiveTab] = useState('location'); // Default to location to show embedded map
  const [callbackName, setCallbackName] = useState('');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    if (!callbackName || !callbackPhone) {
      alert('Please fill out your name and phone number.');
      return;
    }
    setCallbackSubmitted(true);
    setTimeout(() => {
      setCallbackSubmitted(false);
      setCallbackName('');
      setCallbackPhone('');
    }, 4000);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!emailSubject || !emailBody) {
      alert('Please enter a subject and your message.');
      return;
    }
    setEmailSubmitted(true);
    setTimeout(() => {
      setEmailSubmitted(false);
      setEmailSubject('');
      setEmailBody('');
    }, 4000);
  };

  const tabs = [
    {
      id: 'phone',
      icon: <Phone size={20} />,
      title: 'Phone Support',
      subtitle: 'Speak directly for immediate help'
    },
    {
      id: 'whatsapp',
      icon: <MessageCircle size={20} />,
      title: 'WhatsApp Support',
      subtitle: 'Quick answers and instant help'
    },
    {
      id: 'email',
      icon: <Mail size={20} />,
      title: 'Email Support',
      subtitle: 'Send details for custom quotes'
    },
    {
      id: 'callback',
      icon: <PhoneCall size={20} />,
      title: 'Request A Callback',
      subtitle: 'Leave your details to get called back'
    },
    {
      id: 'location',
      icon: <MapPin size={20} />,
      title: 'Office Location',
      subtitle: 'Visit our Kannur office location'
    },
    {
      id: 'hours',
      icon: <Clock size={20} />,
      title: 'Operating Hours',
      subtitle: 'See when our support is active'
    }
  ];

  return (
    <section className="contact-section" id="help">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Our Kannur team is ready to help plan your next journey.
          </p>
        </div>

        {/* New Split Layout */}
        <div className="contact-split-container">
          {/* Left Column: List of Selection Cards */}
          <div className="contact-left-list">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  className={`contact-list-card ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  aria-label={`Show ${tab.title}`}
                >
                  <div className="contact-list-icon">
                    {tab.icon}
                  </div>
                  <div className="contact-list-text">
                    <span className="contact-list-title">{tab.title}</span>
                    <span className="contact-list-subtitle">{tab.subtitle}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Panel */}
          <div className="contact-right-panel glass-panel">
            {/* Phone Panel */}
            {activeTab === 'phone' && (
              <div className="panel-content animate-fade-in">
                <h3 className="panel-title">Phone Support</h3>
                <p className="panel-desc">
                  Call our local team in Kannur. We provide assistance for reservations, driver details, and billing queries.
                </p>
                <div className="phone-card">
                  <div className="phone-number-info">
                    <span className="phone-label">Primary Support</span>
                    <span className="phone-val">+91 98765 43210</span>
                  </div>
                  <button 
                    className="btn-action-primary"
                    onClick={() => alert('Connecting you to EVB Travels Phone Support: +91 98765 43210')}
                  >
                    <span>Call Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* WhatsApp Panel */}
            {activeTab === 'whatsapp' && (
              <div className="panel-content animate-fade-in">
                <h3 className="panel-title">WhatsApp Support</h3>
                <p className="panel-desc">
                  Chat with our support executives for instant cab tracking, driver allocation updates, and quick fare details.
                </p>
                <div className="whatsapp-card">
                  <span className="wa-label">WhatsApp Hotline</span>
                  <span className="wa-status"><span className="wa-status-dot"></span> Available 24/7</span>
                  <button 
                    className="btn-action-whatsapp"
                    onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                  >
                    <span>Chat on WhatsApp</span>
                    <MessageCircle size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Email Panel */}
            {activeTab === 'email' && (
              <div className="panel-content animate-fade-in">
                <h3 className="panel-title">Email Support</h3>
                <p className="panel-desc">
                  Submit a custom travel requirement (such as family weddings, corporate bookings, or multiday tourism travel).
                </p>
                
                {emailSubmitted ? (
                  <div className="panel-success-state animate-fade-in">
                    <CheckCircle2 size={36} className="panel-success-icon" />
                    <span>Email sent successfully! We will reply within 2 hours.</span>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="panel-email-form">
                    <input 
                      type="text" 
                      placeholder="Subject (e.g. Wedding Booking Quote)" 
                      className="panel-form-input"
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      required 
                    />
                    <textarea 
                      placeholder="Write your message here..." 
                      className="panel-form-textarea"
                      value={emailBody}
                      onChange={(e) => setEmailBody(e.target.value)}
                      rows={4}
                      required 
                    ></textarea>
                    <button type="submit" className="btn-action-primary">
                      <span>Send Email</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Callback Panel */}
            {activeTab === 'callback' && (
              <div className="panel-content animate-fade-in">
                <h3 className="panel-title">Request A Callback</h3>
                <p className="panel-desc">
                  Provide your contact details, and a customer relations officer from our Kannur desk will call you back shortly.
                </p>

                {callbackSubmitted ? (
                  <div className="panel-success-state animate-fade-in">
                    <CheckCircle2 size={36} className="panel-success-icon" />
                    <span>We will call you back within 15 minutes!</span>
                  </div>
                ) : (
                  <form onSubmit={handleCallbackSubmit} className="panel-callback-form">
                    <div className="panel-form-row">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="panel-form-input"
                        value={callbackName}
                        onChange={(e) => setCallbackName(e.target.value)}
                        required 
                      />
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="panel-form-input"
                        value={callbackPhone}
                        onChange={(e) => setCallbackPhone(e.target.value)}
                        required 
                      />
                    </div>
                    <button type="submit" className="btn-action-primary">
                      <span>Submit Request</span>
                      <PhoneCall size={16} />
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Office Location Panel - Embedded Google Maps */}
            {activeTab === 'location' && (
              <div className="panel-content map-panel animate-fade-in">
                <div className="map-info-header">
                  <h3 className="panel-title" style={{ marginBottom: '4px' }}>Office Location</h3>
                  <p className="panel-desc" style={{ marginBottom: '16px' }}>
                    Fort Road, Kannur, Kerala - 670001 (Opp. Railway Station Road)
                  </p>
                </div>
                
                {/* Google Map Iframe Container */}
                <div className="map-iframe-container">
                  <iframe 
                    title="EVB Travels Office Map Location on Fort Road Kannur"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.1585250486807!2d75.3688198758416!3d11.85906298835567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba422c5443fa4a5%3A0xc0787e9ec85e8dfb!2sFort%20Rd%2C%20Kannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1718330000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            )}

            {/* Operating Hours Panel */}
            {activeTab === 'hours' && (
              <div className="panel-content animate-fade-in">
                <h3 className="panel-title">Operating Hours</h3>
                <p className="panel-desc">
                  Our customer desk is active during the following hours. Online app bookings run continuously 24/7.
                </p>
                <div className="hours-table">
                  <div className="hours-row">
                    <span className="day-name">Monday - Friday</span>
                    <span className="day-val">06:00 AM - 11:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-name">Saturday</span>
                    <span className="day-val">06:00 AM - 10:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="day-name">Sunday</span>
                    <span className="day-val">07:00 AM - 09:00 PM</span>
                  </div>
                  <div className="hours-row highlight">
                    <span className="day-name">Airport Transfers Support</span>
                    <span className="day-val">24 Hours Active</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Brand Slogan Banner */}
        <div className="contact-banner animate-fade-in">
          <h3 className="banner-slogan">Travel Comfortably. Travel Confidently. Travel From Kannur.</h3>
          <p className="banner-subtext">EVB Tours and Travels — Kannur’s Trusted Cab Service</p>
        </div>
      </div>
    </section>
  );
}
