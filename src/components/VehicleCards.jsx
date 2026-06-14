import React from 'react';
import './VehicleCards.css';
import hatchbackImg from '../assets/hatchback_render.png';
import sedanImg from '../assets/sedan_render.png';
import suvImg from '../assets/suv_render.png';
import cruiserImg from '../assets/cruiser_render.png';

const VEHICLES = [
  {
    id: 'hatchback',
    name: 'Eco Hatchback',
    capacity: '4 Seater • Compact',
    eta: '3 mins away',
    basePrice: 399,
    pricePerKm: 12,
    image: hatchbackImg
  },
  {
    id: 'sedan',
    name: 'EVB Sedan',
    capacity: '4 Seater • Premium',
    eta: '4 mins away',
    basePrice: 599,
    pricePerKm: 15,
    image: sedanImg
  },
  {
    id: 'suv',
    name: 'EVB SUV',
    capacity: '6 Seater • Spacious',
    eta: '6 mins away',
    basePrice: 899,
    pricePerKm: 20,
    image: suvImg
  },
  {
    id: 'cruiser',
    name: 'EVB Cruiser',
    capacity: '12 Seater • Group Travel',
    eta: '9 mins away',
    basePrice: 1499,
    pricePerKm: 28,
    image: cruiserImg
  }
];

export default function VehicleCards({ selectedVehicle, setSelectedVehicle, hasRoute }) {
  // Simple pricing helper based on route selection simulation
  const getEstimatedPrice = (vehicle) => {
    if (hasRoute) {
      // simulate 15km standard route
      return vehicle.basePrice + (15 * vehicle.pricePerKm);
    }
    return vehicle.basePrice;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h3 className="vehicle-section-title">Select Vehicle Class</h3>
      <div className="vehicles-grid">
        {VEHICLES.map((vehicle) => {
          const isSelected = selectedVehicle === vehicle.id;
          const displayPrice = getEstimatedPrice(vehicle);

          return (
            <button
              key={vehicle.id}
              className={`vehicle-card ${isSelected ? 'selected' : ''}`}
              onClick={() => setSelectedVehicle(vehicle.id)}
              type="button"
              aria-label={`Select ${vehicle.name}, ${vehicle.capacity}, price starts at ₹${displayPrice}`}
            >
              <div className="vehicle-header">
                <div className="vehicle-info">
                  <span className="vehicle-name">{vehicle.name}</span>
                  <span className="vehicle-capacity">{vehicle.capacity}</span>
                  <span className="vehicle-eta">
                    <span className="vehicle-eta-dot"></span>
                    {vehicle.eta}
                  </span>
                </div>
                <span className="vehicle-price">₹{displayPrice}</span>
              </div>
              <div className="vehicle-visual">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  style={{ width: '80px', height: '52px', objectFit: 'contain' }} 
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
export { VEHICLES };
