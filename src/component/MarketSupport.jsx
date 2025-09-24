import React from "react";
import "./MarketSupport.css"; // new CSS file

const MarketSupport = () => {
  return (
    <div className="market-container">
      <div className="market-image-container">
        <img 
          src="PlatformSupport.jpg" 
          alt="Market Support" 
          className="market-image" 
        />

        {/* Text Content */}
        <div className="market-text">
          <h1 className="market-heading">How can we help?</h1>
          <p className="market-subtext">
            Search our knowledge base for answers to common questions
          </p>
        </div>
      </div>

      <div className="market-grid">
        {/* Card 1 */}
<div className="market-card">
  <div className="market-header">
    <img src="tradingh.webp" alt="Trading Conditions" />
    <h3>Trading Conditions</h3>
    <span className="market-badge">10</span>
  </div>
  <ul className="market-card-list">
    <li>Leverage</li>
    <li>Swap Free Accounts</li>
    <li>Trading conditions overview</li>
    <li>Contract Specifications</li>
    <li>Contract Expiries</li>
    <li>What are your minimum deposits?</li>
  </ul>
  <button className="market-btn">Explore More</button>
</div>

{/* Card 2 */}
<div className="market-card">
  <div className="market-header">
    <img src="securef.webp" alt="Security of Funds" />
    <h3>Security of Funds</h3>
    <span className="market-badge">4</span>
  </div>
  <ul className="market-card-list">
    <li>Is Market.trad an ECN broker?</li>
    <li>Is Market.trad an NDD broker?</li>
    <li>Where are client funds located?</li>
    <li>Registration, AML, and security</li>
  </ul>
  <button className="market-btn">Explore More</button>
</div>

      </div>
    </div>
  );
};

export default MarketSupport;
