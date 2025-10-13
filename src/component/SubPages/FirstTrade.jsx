import React, { useState } from "react";
import "./FirstTrade.css";

const sections = [
  { title: "Getting Started", img: "pf4.svg", count: 6 },
  { title: "Secure Client Area", img: "pf2.webp", count: 8 },
  { title: "TradingView", img: "Pf1.webp", count: 29 },
  { title: "MetaTrader 5", img: "pf3.webp", count: 28 },
  { title: "MetaTrader 4", img: "pf3.webp", count: 17 },
  { title: "BlackBull Invest", img: "pf4.svg", count: 7 },
  { title: "cTrader", img: "pf4.svg", count: 22 },
  { title: "Account Support", img: "pf4.svg", count: 8 },
];

const FirstTrade = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div>
      <div className="firsttradepage">
      {/* Main First Trade Page */}
      <div className="firsttrade-page">
        {/* Sidebar */}
        <div className="firsttrade-sidebar">
          {sections.map((sec, index) => (
            <div key={index} className="firsttrade-sidebar-item">
              <div
                className={`firsttrade-sidebar-header ${
                  openSection === index ? "active" : ""
                }`}
                onClick={() => toggleSection(index)}
              >
                <img
                  src={sec.img}
                  alt={sec.title}
                  className="firsttrade-sidebar-icon"
                />
                <span className="firsttrade-title">{sec.title}</span>
                <span className="firsttrade-count">{sec.count}</span>
              </div>
              {openSection === index && (
                <div className="firsttrade-dropdown">
                  {Array.from({ length: sec.count }).map((_, i) => (
                    <p key={i}>Question {i + 1}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="firsttrade-content">
          <div className="firsttrade-breadcrumbs">
            <span>Home</span>
            <span className="separator">›</span>
            <span>Support</span>
            <span className="separator">›</span>
            <span>Platform Support</span>
            <span className="separator">›</span>
            <span>Getting Started</span>
            <span className="separator">›</span>
            <span>Trading Help</span>
            <span className="separator">›</span>
            <span className="current">How to place your first trade?</span>
          </div>

          <h1>How to place your first trade?</h1>

          <div className="firsttrade-video-section">
            <div className="firsttrade-video-thumbnail">
              <p>Getting Started: How to place your first trade?</p>
              <iframe
                width="700"
                height="420"
                src="https://www.youtube.com/embed/xHU5MHuUSKI"
                title="First Trade Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      

      {/* Steps Section */}
      <div className="firsttrade-steps-container">
        {/* MetaTrader 4 */}
        <h1>How to place your first trade on MetaTrader 4 (MT4)?</h1>
        <div className="firsttrade-step">
          <h3>Step 1.</h3>
          <p>Open MetaTrader 4 and log in using your Market.trad account credentials.</p>
          <img src="acc5.webp" alt="Step 1" className="firsttrade-step-image" />
        </div>
        <div className="firsttrade-step">
          <h3>Step 2.</h3>
          <p>Select the asset (e.g., EUR/USD), set your lot size, and click Buy or Sell.</p>
          <img src="acc2.webp" alt="Step 2" className="firsttrade-step-image" />
        </div>
        <div className="firsttrade-step">
          <h3>Step 3.</h3>
          <p>Confirm the order and track it under “Trade” tab in MT4.</p>
          <img src="acc3.webp" alt="Step 3" className="firsttrade-step-image" />
        </div>

        {/* MetaTrader 5 */}
        <h1>How to place your first trade on MetaTrader 5 (MT5)?</h1>
        <div className="firsttrade-step">
          <h3>Step 1.</h3>
          <p>Launch MT5 platform and sign in with your Market.trad account details.</p>
          <img src="acc7.webp" alt="Step 1" className="firsttrade-step-image" />
        </div>
        <div className="firsttrade-step">
          <h3>Step 2.</h3>
          <p>Pick your trading instrument, set trade volume, and choose Buy or Sell.</p>
          <img src="acc2.webp" alt="Step 2" className="firsttrade-step-image" />
        </div>
        <div className="firsttrade-step">
          <h3>Step 3.</h3>
          <p>Confirm trade placement and check it under your “Toolbox → Trade” tab.</p>
          <img src="acc6.webp" alt="Step 3" className="firsttrade-step-image" />
        </div>

        {/* TradingView */}
        <h1>How to place your first trade on TradingView?</h1>
        <div className="firsttrade-step">
          <h3>Step 1.</h3>
          <p>Log in to TradingView and connect your Market.trad account.</p>
          <img src="acc3.webp" alt="Step 1" className="firsttrade-step-image" />
        </div>
        <div className="firsttrade-step">
          <h3>Step 2.</h3>
          <p>From the chart, choose an instrument and open the trading panel.</p>
          <img src="acc2.webp" alt="Step 2" className="firsttrade-step-image" />
        </div>
        <div className="firsttrade-step">
          <h3>Step 3.</h3>
          <p>Enter trade details (size, SL/TP) and click “Buy” or “Sell” to execute.</p>
          <img src="acc7.webp" alt="Step 3" className="firsttrade-step-image" />
        </div>

        {/* cTrader */}
        <h1>How to place your first trade on cTrader?</h1>
        <div className="firsttrade-step">
          <h3>Step 1.</h3>
          <p>Open cTrader and log in with your Market.trad account credentials.</p>
          <img src="acc5.webp" alt="Step 1" className="firsttrade-step-image" />
        </div>
        <div className="firsttrade-step">
          <h3>Step 2.</h3>
          <p>Select an asset from the watchlist and open a new order window.</p>
          <img src="acc3.webp" alt="Step 2" className="firsttrade-step-image" />
        </div>
        <div className="firsttrade-step">
          <h3>Step 3.</h3>
          <p>Set trade size, place Stop-Loss/Take-Profit if needed, and execute Buy/Sell.</p>
          <img src="acc6.webp" alt="Step 3" className="firsttrade-step-image" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default FirstTrade;
