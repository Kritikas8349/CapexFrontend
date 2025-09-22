import React from 'react';
import './Market.css';


const Market = () => {
  return (
    <div className="market1">
      <div className="market-left">
        <h1>Trade Forex</h1>
        <p>
          Access forex trading with spreads starting from 0.0 pips, leverage up to 1:500, and
          industry leading execution speeds averaging less than 20 milliseconds.
        </p>
      </div>

      <div className="market-right">
        <img src="mobile.webp" alt="Phone and Flags" className="market-img" />
      </div>
    </div>
  );
};

export default Market;
