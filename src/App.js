import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './layout/Navbar';
import TravelHero from './layout/TravelHero';
import BottomBar from './layout/BottomBar';
import Navlinks from './layout/Navlinks';
import Footer from './layout/Footer';

import Home from './pages/Home';
import Weather from './pages/Weather';
import Building from './pages/Building';
import BuildingDetail from './pages/BuildingDetail';
import Nearby from './pages/Nearby';
import Nature from './pages/Nature';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <TravelHero />
  

      <BottomBar />
       <Navlinks />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/building" element={<Building />} />
          <Route path="/building/:id" element={<BuildingDetail />} />
          <Route path="/nearby" element={<Nearby />} />
          <Route path="/nature" element={<Nature />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
}
