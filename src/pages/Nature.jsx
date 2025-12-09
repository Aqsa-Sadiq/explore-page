import React, { useState } from 'react';

const packages = [
  { id: 1, title: 'Hunza Valley Tour', days: '5 days', price: '₨63,000', img: 'https://media.istockphoto.com/id/1319188329/photo/woman-looking-at-mountains-of-northern-pakistan-from-window-in-the-van.webp?a=1&b=1&s=612x612&w=0&k=20&c=8iz9ahbWswNmFGLKp81zQwMVfJ0aid1Pc3jUfI1640g=' },
  { id: 2, title: 'Skardu Adventure', days: '6 days', price: '₨77,000', img: 'https://plus.unsplash.com/premium_photo-1697730198247-ed3c72ecf932?w=500&auto=format&fit=crop&q=60' },
  { id: 3, title: 'Naran Kaghan Trip', days: '4 days', price: '₨52,500', img: 'https://images.unsplash.com/photo-1736230132520-79086a2ef216?w=500&auto=format&fit=crop&q=60' },
  { id: 4, title: 'Murree Hills Getaway', days: '3 days', price: '₨31,500', img: 'https://images.unsplash.com/photo-1695197460386-74242dc9c0f7?w=500&auto=format&fit=crop&q=60' },
  { id: 5, title: 'Neelum Valley Escape', days: '4 days', price: '₨56,000', img: 'https://images.unsplash.com/photo-1722599556316-7873764fe301?w=500&auto=format&fit=crop&q=60' },
  { id: 6, title: 'Swat Malam Jabba Tour', days: '3 days', price: '₨45,500', img: 'https://images.unsplash.com/photo-1672915619138-108a218cfcd2?w=500&auto=format&fit=crop&q=60' },
  { id: 7, title: 'Fairy Meadows Trek', days: '5 days', price: '₨87,500', img: 'https://images.unsplash.com/photo-1736230132473-8a14f157edc5?w=500&auto=format&fit=crop&q=60' },
  { id: 8, title: 'Gorakh Hill Camping', days: '2 days', price: '₨24,500', img: 'https://images.unsplash.com/photo-1663076255593-f9c0980df45a?w=500&auto=format&fit=crop&q=60' },
  { id: 9, title: 'Islamabad City Tour', days: '2 days', price: '₨28,000', img: 'https://images.unsplash.com/photo-1608020932658-d0e19a69580b?w=500&auto=format&fit=crop&q=60' },
  { id: 10, title: 'Lahore Heritage Trip', days: '2 days', price: '₨22,750', img: 'https://images.unsplash.com/photo-1758714144057-aae0194dfde5?w=500&auto=format&fit=crop&q=60' },
  { id: 11, title: 'Karachi Sea View Tour', days: '1 day', price: '₨14,000', img: 'https://images.unsplash.com/photo-1696588654683-5d24a6b3872a?w=500&auto=format&fit=crop&q=60' },
  { id: 12, title: 'Gwadar Beach Trip', days: '3 days', price: '₨49,000', img: 'https://media.istockphoto.com/id/1185084209/photo/muine.webp?a=1&s=612x612&w=0&k=20&c=9oxgjE6JxZ99tb5I042YY1q10veYWvS8JUk8Bsm_DFk=' },
  { id: 13, title: 'Ranikot Fort Adventure', days: '1 day', price: '₨17,500', img: 'https://images.unsplash.com/photo-1668947277383-2bcc2d5fbe16?w=500&auto=format&fit=crop&q=60' },
  { id: 14, title: 'Cholistan Desert Safari', days: '2 days', price: '₨38,500', img: 'https://plus.unsplash.com/premium_photo-1673264933092-a795ddc9f11b?w=500&auto=format&fit=crop&q=60' },
  { id: 15, title: 'Ziarat Trip', days: '2 days', price: '₨33,250', img: 'https://images.unsplash.com/photo-1707548546525-30c8a32304c5?w=500&auto=format&fit=crop&q=60' },
  { id: 16, title: 'Kumrat Valley Tour', days: '4 days', price: '₨59,500', img: 'https://images.unsplash.com/photo-1723577434680-5f060c6a7e00?w=500&auto=format&fit=crop&q=60' },
  { id: 17, title: 'Khaplu Palace Visit', days: '3 days', price: '₨52,500', img: 'https://images.unsplash.com/photo-1658378078665-093bc55aaa55?w=500&auto=format&fit=crop&q=60' },
  { id: 18, title: 'K2 Base Camp Trek', days: '12 days', price: '₨210,000', img: 'https://plus.unsplash.com/premium_photo-1723485618246-afd5f5830ea1?w=500&auto=format&fit=crop&q=60' },
  { id: 19, title: 'Shogran Siri Paye Tour', days: '3 days', price: '₨45,500', img: 'https://images.unsplash.com/photo-1728411963176-63aef3e865a6?w=500&auto=format&fit=crop&q=60' },
  { id: 20, title: 'Hingol National Park', days: '2 days', price: '₨42,000', img: 'https://images.unsplash.com/photo-1763102917342-15ba3b61a976?w=500&auto=format&fit=crop&q=60' },
  { id: 21, title: 'Astola Island Trip', days: '3 days', price: '₨56,000', img: 'https://media.istockphoto.com/id/981494284/photo/boat-sailing-in-sea-against-sky.webp?a=1&s=612x612&w=0&k=20&c=w_NangKR-bn8IE9IIC0XZZnQ6-QWn8KMDfAZQY005zk=' },
  { id: 22, title: 'Kalash Valley Festival', days: '4 days', price: '₨63,000', img: 'https://images.unsplash.com/photo-1550586678-f7225f03c44b?w=500&auto=format&fit=crop&q=60' },
];

export default function Nature() {
  const [bookedPackageId, setBookedPackageId] = useState(null);

  const handleBooking = (id) => {
    setBookedPackageId(id);
  };

  return (
    <section
      className="page container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: '20px',
        background: '#f5f5f5',
      }}
    >
      <h2 style={{ marginBottom: '30px' }}>Nature & Travel Packages</h2>

      <div
        className="packages"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          maxWidth: '1200px',
        }}
      >
        {packages.map(p => {
          const isBooked = bookedPackageId === p.id;

          return (
            <div
              key={p.id}
              className="package-card"
              style={{
                width: '250px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                textAlign: 'center',
                boxShadow: isBooked ? '0 0 15px green' : '0 4px 6px rgba(0,0,0,0.1)',
                transition: '0.3s',
                background: '#fff',
              }}
            >
              <div
                className="package-img"
                style={{
                  backgroundImage: `url(${p.img})`,
                  height: '150px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>

              <div style={{ padding: '10px' }}>
                <h3>{p.title}</h3>
                <div className="muted">{p.days}</div>
                <div className="price">{p.price}</div>
                {isBooked ? (
                  <div
                    style={{
                      marginTop: '10px',
                      color: 'green',
                      fontWeight: 'bold',
                    }}
                  >
                    ✅ Tour Booked
                  </div>
                ) : (
                  <button
                    className="btn"
                    style={{
                      marginTop: '10px',
                      padding: '8px 12px',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleBooking(p.id)}
                  >
                    Book Now
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}