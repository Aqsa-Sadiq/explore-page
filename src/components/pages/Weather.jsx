import React, { useState } from 'react';
import './Weather.css';

const weatherIcons = {
  Sunny: '☀️',
  Cloudy: '☁️',
  Rainy: '🌧️',
  Windy: '💨',
  Hot: '🌡️',
  Humid: '💧',
};

const mockCities = [
 
  { city: 'Karachi', weather: 'Sunny', temp: '31°C' },
  { city: 'Lahore', weather: 'Cloudy', temp: '28°C' },
  { city: 'Islamabad', weather: 'Rainy', temp: '24°C' },
  { city: 'Rawalpindi', weather: 'Partly Cloudy', temp: '25°C' },
  { city: 'Faisalabad', weather: 'Sunny', temp: '30°C' },
  { city: 'Multan', weather: 'Hot', temp: '34°C' },
  { city: 'Hyderabad', weather: 'Humid', temp: '33°C' },
  { city: 'Peshawar', weather: 'Windy', temp: '26°C' },
  { city: 'Quetta', weather: 'Cool', temp: '22°C' },
  { city: 'Sukkur', weather: 'Sunny', temp: '32°C' },
  { city: 'Sialkot', weather: 'Cloudy', temp: '27°C' },
  { city: 'Gujranwala', weather: 'Sunny', temp: '29°C' },
  { city: 'Bahawalpur', weather: 'Hot', temp: '35°C' },
  { city: 'Abbottabad', weather: 'Rainy', temp: '23°C' },
  { city: 'Mardan', weather: 'Windy', temp: '27°C' },
  { city: 'Mirpur', weather: 'Sunny', temp: '30°C' },
  { city: 'Okara', weather: 'Partly Cloudy', temp: '28°C' },
  { city: 'Larkana', weather: 'Hot', temp: '33°C' },
  { city: 'Nawabshah', weather: 'Sunny', temp: '32°C' },
  { city: 'Muzaffarabad', weather: 'Cool', temp: '24°C' },
];

export default function Weather() {
  const [cities] = useState(mockCities);

  return (
    <section className="weather-page">
      <h2 className="weather-title">Weather</h2>
      <p className="weather-subtitle">
        Select a city to see current conditions
      </p>

      <div className="weather-list">
        {cities.map((c) => (
          <div className="weather-card" key={c.city}>
            <div className="left">
              <strong>{c.city}</strong>
              <span className="icon">{weatherIcons[c.weather]}</span>
              <small>{c.weather}</small>
            </div>
            <div className="temp">{c.temp}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
