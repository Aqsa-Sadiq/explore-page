
import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import buildings from './Building'; 

export default function BuildingDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  
  const building = location.state?.building || buildings.find(b => b.id === parseInt(id));

  if (!building) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>🏠 Building not found!</p>;
  }

  
  const usd = parseFloat(building.price.replace('$','').replace('/night',''));
  const pkrPrice = (usd * 300).toLocaleString(); 

  return (
    <div className="page container" style={{ maxWidth: '800px', margin: '50px auto', textAlign: 'center' }}>
      <button 
        className="btn" 
        onClick={() => navigate(-1)} 
        style={{ marginBottom: '20px', padding: '8px 16px', cursor: 'pointer', background:'#007bff', color:'#fff', border:'none', borderRadius:'4px' }}
      >
        ⬅ Back
      </button>

      <div className="building-detail">
        <div 
          className="building-img" 
          style={{ 
            backgroundImage: `url(${building.img})`, 
            height: '400px', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            borderRadius: '12px',
            marginBottom: '20px'
          }}
        ></div>

        <h2 style={{ marginBottom: '10px' }}>{building.name}</h2>
        <p className="price" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px' }}>
          PKR {pkrPrice}/night
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
          Enjoy your stay at {building.name}! This property offers comfortable accommodations, beautiful surroundings, 
          and top-notch amenities to make your visit memorable. Book now and experience luxury at affordable prices.
        </p>
      </div>
    </div>
  );
}
