import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import TravelHero from './components/layout/TravelHero';
import BottomBar from './components/layout/BottomBar';
import Navlinks from './components/Navlinks';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import Weather from './components/pages/Weather';
import Building from './components/pages/Building';
import BuildingDetail from './components/pages/BuildingDetail';
import Nearby from './components/pages/Nearby';
import Nature from './components/pages/Nature';

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
