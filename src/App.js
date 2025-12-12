import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainNavbar from './Navbar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Building from './pages/Building';
import Nearby from './pages/Nearby';
import Nature from './pages/Nature';
import BuildingDetail from './pages/BuildingDetail';
import TravelHero from './TravelHero';   
import Footer from './Footer';
import BottomBar from './BottomBar';

export default function App() {
  return (
    <div className="app">
        <MainNavbar/>
         <TravelHero />
         <BottomBar/>
      <Navbar />
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
