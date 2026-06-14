import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Calendar, Compass, Navigation } from 'lucide-react';
import './BookingForm.css';

const POPULAR_LOCATIONS = [
  'Kannur International Airport (CNN)',
  'Kannur Railway Station (CAN)',
  'Thalassery Railway Station',
  'Payyannur Bus Stand',
  'Iritty Town Center',
  'Taliparamba Highway Junction',
  'Kozhikode Airport (CCJ)',
  'Kochi Infopark',
  'Mangalore Airport (IXE)',
  'Wayanad Vythiri Resort Area'
];

export default function BookingForm({ from, setFrom, to, setTo, date, setDate }) {
  const [fromSearch, setFromSearch] = useState(from);
  const [toSearch, setToSearch] = useState(to);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const fromRef = useRef(null);
  const toRef = useRef(null);

  // Close suggestions on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (fromRef.current && !fromRef.current.contains(event.target)) {
        setShowFromSuggestions(false);
      }
      if (toRef.current && !toRef.current.contains(event.target)) {
        setShowToSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredFrom = POPULAR_LOCATIONS.filter(loc =>
    loc.toLowerCase().includes(fromSearch.toLowerCase()) && loc !== toSearch
  );

  const filteredTo = POPULAR_LOCATIONS.filter(loc =>
    loc.toLowerCase().includes(toSearch.toLowerCase()) && loc !== fromSearch
  );

  const handleSelectFrom = (val) => {
    setFromSearch(val);
    setFrom(val);
    setShowFromSuggestions(false);
  };

  const handleSelectTo = (val) => {
    setToSearch(val);
    setTo(val);
    setShowToSuggestions(false);
  };

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="booking-form-container">
      {/* Pickup Input */}
      <div className="input-group" ref={fromRef}>
        <label htmlFor="pickup-input" className="input-label">
          <Navigation size={14} className="input-label-icon" style={{ color: 'var(--brand-emerald)' }} />
          Pickup Point
        </label>
        <div className="input-wrapper">
          <MapPin size={20} className="input-icon" />
          <input
            id="pickup-input"
            type="text"
            className="input-field"
            placeholder="Enter pickup location in Kannur..."
            value={fromSearch}
            onChange={(e) => {
              setFromSearch(e.target.value);
              setFrom(e.target.value);
              setShowFromSuggestions(true);
            }}
            onFocus={() => setShowFromSuggestions(true)}
            autoComplete="off"
            required
          />
        </div>
        {/* Connection visual line */}
        <div className="location-connect-line"></div>

        {showFromSuggestions && filteredFrom.length > 0 && (
          <ul className="suggestions-list" id="pickup-suggestions">
            {filteredFrom.map((loc, idx) => (
              <li
                key={idx}
                className="suggestion-item"
                onClick={() => handleSelectFrom(loc)}
              >
                <Compass size={16} className="suggestion-icon" />
                <span>{loc}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Dropoff Input */}
      <div className="input-group" ref={toRef}>
        <label htmlFor="dropoff-input" className="input-label">
          <MapPin size={14} className="input-label-icon" style={{ color: 'red' }} />
          Dropoff Destination
        </label>
        <div className="input-wrapper">
          <MapPin size={20} className="input-icon" />
          <input
            id="dropoff-input"
            type="text"
            className="input-field"
            placeholder="Enter dropoff destination..."
            value={toSearch}
            onChange={(e) => {
              setToSearch(e.target.value);
              setTo(e.target.value);
              setShowToSuggestions(true);
            }}
            onFocus={() => setShowToSuggestions(true)}
            autoComplete="off"
            required
          />
        </div>

        {showToSuggestions && filteredTo.length > 0 && (
          <ul className="suggestions-list" id="dropoff-suggestions">
            {filteredTo.map((loc, idx) => (
              <li
                key={idx}
                className="suggestion-item"
                onClick={() => handleSelectTo(loc)}
              >
                <Compass size={16} className="suggestion-icon" />
                <span>{loc}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Date Picker Input */}
      <div className="input-group">
        <label htmlFor="date-input" className="input-label">
          <Calendar size={14} className="input-label-icon" />
          Departure Date
        </label>
        <div className="input-wrapper">
          <Calendar size={20} className="input-icon" />
          <input
            id="date-input"
            type="date"
            className="input-field"
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
}
