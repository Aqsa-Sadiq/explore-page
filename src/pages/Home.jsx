import React from 'react';
import Card from '../layout/Card';


import './Home.css';


const cards = [
  {
    title: 'Weather',
    description: 'Check current weather at your destination (sunny, rainy, cloudy).',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=60',
    to: '/weather',
  },
  {
    title: 'Hotels and Stay',
    description: 'Browse stay options and buildings with prices.',
    image: 'https://images.unsplash.com/photo-1636847782599-d4b10f4811d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxuZWFyYnklMjBob3RlbHN8ZW58MHx8MHx8fDA%3D',
    to: '/building',
  },
  {
    title: 'Nearby',
    description: 'Find guesthouses and stays close to the airport.',
    image: 'https://images.unsplash.com/photo-1746431564860-4bad7d9a756e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG5lYXJieSUyMGFpcnBvcnR8ZW58MHx8MHx8fDA%3D',
    to: '/nearby',
  },
  {
    title: 'Travel and Tour',
    description: 'Explore travel packages, trips and nature tours.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60',
    to: '/nature',
  },
];

export default function Home() {
  return (
    <section className="home container">
    
      <h2 className="section-title">Welcome — Choose a service</h2>
      <div className="cards-grid">
        {cards.map((c) => (
          <Card key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}