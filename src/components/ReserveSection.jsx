import React, { useState } from 'react';
import { Calendar, Clock, CreditCard, ArrowRight, CheckCircle2, ChevronDown, Info } from 'lucide-react';
import reserveIllustration from '../assets/reserve_illustration.png';
import './ReserveSection.css';

export default function ReserveSection() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00 AM');
  const [isReserved, setIsReserved] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  const handleNext = (e) => {
    e.preventDefault();
    if (!date) {
      alert('Please select a date for your reservation.');
      return;
    }
    setIsReserved(true);
  };

  const handleReset = () => {
    setDate('');
    setTime('09:00 AM');
    setIsReserved(false);
  };

  // Preset times for the dropdown
  const timeOptions = [
    '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'
  ];

  return (
    <section className="reserve-section" id="reserve-ride-later">
      <div className="container">
        <h2 className="reserve-main-title">Plan for later</h2>

        <div className="reserve-grid">
          {/* Left Side: Interactive Reserve Widget */}
          <div className="reserve-card-left">
            {isReserved ? (
              <div className="reserve-success-state animate-fade-in">
                <div className="reserve-success-icon-box">
                  <CheckCircle2 size={48} className="success-icon" />
                </div>
                <h3 className="reserve-success-title">Ride Scheduled!</h3>
                <p className="reserve-success-desc">
                  Your EVB Reserve ride is planned for <strong>{date}</strong> at <strong>{time}</strong>. We will assign a professional driver 1 hour before departure.
                </p>
                <div className="reserve-success-details">
                  <div className="detail-item">
                    <Calendar size={16} />
                    <span>{date}</span>
                  </div>
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>{time}</span>
                  </div>
                </div>
                <button className="btn-reserve-reset" onClick={handleReset}>
                  Schedule Another Ride
                </button>
              </div>
            ) : (
              <div className="reserve-card-content">
                <div className="reserve-text-area">
                  <h3 className="reserve-card-title">
                    Get your ride right with EVB Reserve
                  </h3>
                  
                  <form onSubmit={handleNext} className="reserve-form">
                    <span className="reserve-form-label">Choose date and time</span>
                    
                    <div className="reserve-inputs-row">
                      {/* Date Input */}
                      <div className="reserve-input-group">
                        <label htmlFor="reserve-date" className="reserve-field-label">Date</label>
                        <div className="reserve-input-wrapper">
                          <Calendar size={16} className="reserve-input-icon" />
                          <input
                            id="reserve-date"
                            type="date"
                            className="reserve-field"
                            min={today}
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      {/* Time Selector */}
                      <div className="reserve-input-group">
                        <label htmlFor="reserve-time" className="reserve-field-label">Time</label>
                        <div className="reserve-input-wrapper">
                          <Clock size={16} className="reserve-input-icon" />
                          <select
                            id="reserve-time"
                            className="reserve-field select-field"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                          >
                            {timeOptions.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                          <ChevronDown size={16} className="reserve-select-arrow" />
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn-reserve-next" id="reserve-submit-btn">
                      <span>Next</span>
                      <ArrowRight size={18} />
                    </button>
                  </form>
                </div>
                
                {/* Illustration Column */}
                <div className="reserve-illustration-container">
                  <img 
                    src={reserveIllustration} 
                    alt="EVB Reserve watch and calendar illustration" 
                    className="reserve-illustration-img" 
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Benefits Card */}
          <div className="reserve-card-right glass-panel">
            <h3 className="benefits-title">Benefits</h3>
            
            <ul className="benefits-list">
              <li className="benefit-item">
                <div className="benefit-icon-box">
                  <Calendar size={20} />
                </div>
                <div className="benefit-text">
                  <p className="benefit-desc">
                    Choose your exact pickup time up to 90 days in advance.
                  </p>
                </div>
              </li>
              
              <li className="benefit-item">
                <div className="benefit-icon-box">
                  <Clock size={20} />
                </div>
                <div className="benefit-text">
                  <p className="benefit-desc">
                    Extra wait time included to meet your ride.
                  </p>
                </div>
              </li>
              
              <li className="benefit-item">
                <div className="benefit-icon-box">
                  <CreditCard size={20} />
                </div>
                <div className="benefit-text">
                  <p className="benefit-desc">
                    Cancel at no charge up to 60 minutes in advance.
                  </p>
                </div>
              </li>
            </ul>

            <div className="benefits-terms-container">
              <button 
                className={`btn-see-terms ${showTerms ? 'active' : ''}`} 
                onClick={() => setShowTerms(!showTerms)}
                aria-expanded={showTerms}
              >
                <span>See terms</span>
                <ChevronDown size={14} className="terms-chevron" />
              </button>
              
              {showTerms && (
                <div className="terms-dropdown-content animate-fade-in">
                  <p>
                    * Terms apply. Reservation fees are included in the upfront fare. Cancellations must be made at least 60 minutes prior to the scheduled pickup time to avoid a cancellation fee. Availability may vary by vehicle class and booking window.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
