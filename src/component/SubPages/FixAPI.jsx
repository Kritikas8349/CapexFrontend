import React from "react";
import "./FixAPI.css"; // Make sure your CSS file is named FixAPI.css

const FixAPI = () => {
  return (

    <div className="fixapi-trading-container">
    <div className="fixapi-wrapper">
      <h1 className="fixapi-heading">FIX API Trading</h1>

      <div className="fixapi-description">
        <h3>
          <br />
          The <strong>FIX (Financial Information eXchange) protocol</strong> enables
          you to place trades directly on the market with speed and precision.
        </h3>

        <p>
          <br />
          At <strong>Market.trad</strong>, we provide a robust <strong>FIX API</strong> solution
          for institutional clients and advanced traders who prefer to connect using
          their own trading applications instead of MetaTrader 4.
        </p>

        <p>
          Our FIX API connects directly to BlackBull Markets’ ECN bridge, giving you
          <strong> Direct Market Access (DMA)</strong> and seamless integration with
          our liquidity providers. This ensures faster trade execution, lower latency,
          and full control over your trading environment.
        </p>

        <p>
          <strong>Market.trad</strong> offers a customizable FIX API platform that works with any
          compatible FIX application. Whether you are using your proprietary software
          or third-party solutions, you can trade with maximum efficiency and reliability.
        </p>
      </div>
    </div>
           {/* Highlight Box for Key Benefits */}
      <div className="fixapi-benefits-wrapper">
        <div className="fixapi-benefits-box">
          <h2>Main Advantages of FIX API</h2>
          <ul>
            <li>Direct connection to BlackBull Markets’ bridge provider.</li>
            <li>Seamless ECN integration and Straight Through Processing (STP).</li>
            <li>Totally customizable to fit any trading strategy.</li>
            <li>Compatible with any FIX-enabled trading platform.</li>
            <li>Faster trade execution with reduced latency.</li>
            <li>Reliable connectivity for uninterrupted trading.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FixAPI;
