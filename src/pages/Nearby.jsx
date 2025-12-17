import React from 'react';
import { FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';

const nearby = [
  { id: 1, name: 'Airport Guesthouse A', dist: '0.5 km', price: 30 },
  { id: 2, name: 'Transit Inn', dist: '1.2 km', price: 35 },
  { id: 3, name: 'Budget Pods', dist: '0.8 km', price: 20 },
  { id: 4, name: 'Runway View Hotel', dist: '0.4 km', price: 40 },
  { id: 5, name: 'Aviation Lodge', dist: '1.0 km', price: 28 },
  { id: 6, name: 'Airport Comfort Suites', dist: '1.5 km', price: 32 },
  { id: 7, name: 'Skyline Guest Rooms', dist: '0.6 km', price: 26 },
  { id: 8, name: 'Traveller’s Mini Hotel', dist: '1.8 km', price: 22 },
  { id: 9, name: 'Quick Stay Apartments', dist: '0.9 km', price: 34 },
  { id: 10, name: 'Metro Airport Hotel', dist: '1.3 km', price: 38 },
  { id: 11, name: 'Flight View Inn', dist: '0.7 km', price: 25 },
  { id: 12, name: 'Express Lodge', dist: '1.1 km', price: 27 },
  { id: 13, name: 'Airport Rest House', dist: '0.3 km', price: 33 },
  { id: 14, name: 'Sky Stay Pakistan', dist: '1.6 km', price: 29 },
  { id: 15, name: 'Comfort Transit Rooms', dist: '1.4 km', price: 31 },
  { id: 16, name: 'Cloud Nine Residency', dist: '0.6 km', price: 36 },
  { id: 17, name: 'Budget Traveller Inn', dist: '2.0 km', price: 19 },
  { id: 18, name: 'City Airport Guest Home', dist: '0.8 km', price: 28 },
  { id: 19, name: 'Flyers Guesthouse', dist: '1.7 km', price: 24 },
  { id: 20, name: 'Airport Plaza Suites', dist: '1.9 km', price: 37 },
];

export default function Nearby() {
  const usdToPkr = 300; 

  return (
   <section className="page container" style={{ display: 'block' }}>
 
  <div style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
    <h2 style={{ fontSize: '26px', fontWeight: '600', color: '#333', margin: 0 }}>
      Nearby Stays (close to airport)
    </h2>
  </div>


  <div className="list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {nearby.map(n => (
      <div
        key={n.id}
        className="list-item"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          borderBottom: '1px solid #ddd',
          borderRadius: '6px',
          background: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <strong>{n.name}</strong>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#888' }}>
            <FaMapMarkerAlt color="#e74c3c" /> {n.dist} away
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}>
          <FaMoneyBillWave color="#27ae60" /> PKR {n.price * usdToPkr}/night
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
