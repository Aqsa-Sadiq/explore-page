import React from "react";
import "./BottomBar.css";

const BottomBar = () => {
  return (
    <div className="container">
    <div className="bottom-bar">
      <div className="item airport">Airport Map</div>
      <div className="item">Ticket Booking</div>
      <div className="item">Hotel Reservation</div>
      <div className="item">Flight Reservation</div>
    </div>
    </div>
  );
};

export default BottomBar;
