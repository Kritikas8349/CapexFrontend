// src/Layout/TradeLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import TradeNavbar from "./TradeNavbar";
// import  "./TradeLayout.css"
const TradeLayout = () => {
  return (
    <div className="trade-layout">
      {/* Trade Navbar stays fixed for all trade-related pages */}
      <TradeNavbar />

      {/* Below navbar — render nested routes like /trade, /trade/history */}
      <div className="trade-content">
        <Outlet />
      </div>
    </div>
  );
};

export default TradeLayout;
