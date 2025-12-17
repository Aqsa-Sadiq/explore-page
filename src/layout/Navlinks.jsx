import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
return (
<nav className="navbar">
    <div><h3>DezyEXPLORE</h3></div>
<div className="nav-links">
<NavLink to="/" end>Home</NavLink>
<NavLink to="/weather">Weather</NavLink>
<NavLink to="/building">Hotels</NavLink>
<NavLink to="/nearby">Nearby</NavLink>
<NavLink to="/nature">Tour and Travel</NavLink>
</div>
</nav>
);
}