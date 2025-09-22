import React from "react";
import "./PlatformSupport.css";

const PlatformSupport = () => {
  return (
    <div className="platform-container">
      <div className="platform-image-container">
        <img 
          src="PlatformSupport.jpg" 
          alt="Platform Support" 
          className="platform-image" 
        />

        {/* Text Content */}
        <div className="platform-text">
          <h1 className="platform-heading">How can we help?</h1>
          <p className="platform-subtext">
            Search our knowledge base for answers to common questions
          </p>
        </div>
      </div>

      <div className="support-grid">
      {/* Card 1 */}
      <div className="support-card">
        <div className="support-header">
          <img src="crypto.png" alt="TradingView" />
          <h3>TradingView</h3>
          <span className="badge">29</span>
        </div>
        <ul className="support-card-list">
          <li>How to create a TradingView Live account?</li>
          <li>How to create a TradingView Demo account?</li>
          <li>How to transfer funds to your TradingView account?</li>
          <li>How to set a TradingView account password?</li>
          <li>How to connect Market.trad to TradingView?</li>
          <li>Can I use TradingView on my mobile device?</li>
        </ul>
        <button className="explore-btn">Explore More</button>
      </div>

      {/* Card 2 */}
      <div className="support-card">
        <div className="support-header">
          <img src="pf2.webp" alt="Secure Area" />
          <h3>Secure Client Area</h3>
          <span className="badge">8</span>
        </div>
        <ul className="support-card-list">
          <li>What is My Wallet?</li>
          <li>How do I deposit funds?</li>
          <li>How do I transfer funds between wallet and trading account?</li>
          <li>How do I download a trading platform?</li>
          <li>How do I withdraw funds?</li>
          <li>How do I view my funding history?</li>
        </ul>
        <button className="explore-btn">Explore More</button>
      </div>

      {/* Card 3 */}
      <div className="support-card">
        <div className="support-header">
          <img src="Pf1.webp" alt="MT4" />
          <h3>MetaTrader 4</h3>
          <span className="badge">17</span>
        </div>
        <ul className="support-card-list">
          <li>How to create an MT4 Live account?</li>
          <li>How to create an MT4 Demo account?</li>
          <li>How to reset your MT4 account password?</li>
          <li>How to transfer funds to your MT4 account?</li>
          <li>How to download MT4?</li>
          <li>How to use MT4 on mobile?</li>
        </ul>
        <button className="explore-btn">Explore More</button>
      </div>

      {/* Card 4 */}
      <div className="support-card">
        <div className="support-header">
          <img src="pf3.webp" alt="MT5" />
          <h3>MetaTrader 5</h3>
          <span className="badge">28</span>
        </div>
        <ul className="support-card-list">
          <li>How to create an MT5 Live account?</li>
          <li>How to create an MT5 Demo account?</li>
          <li>How to transfer funds to your MT5 account?</li>
          <li>How to reset your MT5 password?</li>
          <li>How to download MT5?</li>
          <li>How to use MT5 on mobile?</li>
        </ul>
        <button className="explore-btn">Explore More</button>
      </div>

      {/* Card 5 */}
      <div className="support-card">
        <div className="support-header">
          <img src="crypto.png" alt="Invest" />
          <h3>Market.trad Invest</h3>
          <span className="badge">7</span>
        </div>
        <ul className="support-card-list">
          <li>Transition to Market.trad from Rockfort</li>
          <li>How to create an Investor Account?</li>
          <li>How to view investment reports?</li>
          <li>How to withdraw investment profits?</li>
        </ul>
        <button className="explore-btn">Explore More</button>
      </div>

      {/* Card 6 */}
      <div className="support-card">
        <div className="support-header">
          <img src="pf4.svg" alt="cTrader" />
          <h3>cTrader</h3>
          <span className="badge">22</span>
        </div>
        <ul className="support-card-list">
          <li>How to create a cTrader Live account?</li>
          <li>How to create a cTrader Demo account?</li>
          <li>How to reset your cTrader password?</li>
          <li>How to transfer funds to your cTrader account?</li>
          <li>How to download cTrader?</li>
          <li>How to use cTrader on mobile?</li>
        </ul>
        <button className="explore-btn">Explore More</button>
      </div>
        
      {/* Card 7 (Bottom Row Left) */}
      <div className="support-card wide-card">
        <div className="support-header">
          <img src="pf4.svg" alt="Getting Started" />
          <h3>Getting Started</h3>
          <span className="badge">6</span>
        </div>
        <ul className="support-card-list">
          <li>How to create your Market.trad account?</li>
          <li>How to verify your account?</li>
          <li>How to fund your account?</li>
          <li>How to connect to your trading platform?</li>
          <li>How to place your first trade?</li>
          <li>What is the suitability quiz?</li>
        </ul>
      </div>

      {/* Card 8 (Bottom Row Right) */}
      <div className="support-card wide-card">
        <div className="support-header">
          <img src="pf4.svg" alt="Account Support" />
          <h3>Account Support</h3>
          <span className="badge">8</span>
        </div>
        <ul className="support-card-list">
          <li>Documents required to open a Company or Trust Account (FSA)</li>
          <li>Documents required to open a Company or Trust Account (FMA)</li>
          <li>How to reset your login password?</li>
          <li>How to create a new trading account?</li>
          <li>How to set a trading account password?</li>
          <li>How to deposit and withdraw funds?</li>
        </ul>
        <button className="explore-btn">Explore More</button>
      </div>
    </div>

    </div>
  );
};

export default PlatformSupport;
