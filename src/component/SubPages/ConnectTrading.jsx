import React, { useState } from "react";
import "./ConnectTrading.css";

const sections = [
  { title: "Getting Started", img: "/public/pf4.svg", count: 6 },
  { title: "Secure Client Area", img: "/public/pf2.webp", count: 8 },
  { title: "TradingView", img: "/public/Pf1.webp", count: 29 },
  { title: "MetaTrader 5", img: "/public/pf3.webp", count: 28 },
  { title: "MetaTrader 4", img: "/public/pf3.webp", count: 17 },
  { title: "BlackBull Invest", img: "/public/pf4.svg", count: 7 },
  { title: "cTrader", img: "/public/pf4.svg", count: 22 },
  { title: "Account Support", img: "/public/pf4.svg", count: 8 },
];

const ConnectTrading = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div>
      {/* Main Connect Trading Page */}
      <div className="connect-page">
        {/* Sidebar */}
        <div className="connect-sidebar">
          {sections.map((sec, index) => (
            <div key={index} className="connect-sidebar-item">
              <div
                className={`connect-sidebar-header ${openSection === index ? "active" : ""}`}
                onClick={() => toggleSection(index)}
              >
                <img src={sec.img} alt={sec.title} className="connect-sidebar-icon" />
                <span className="connect-title">{sec.title}</span>
                <span className="connect-count">{sec.count}</span>
              </div>
              {openSection === index && (
                <div className="connect-dropdown">
                  {Array.from({ length: sec.count }).map((_, i) => (
                    <p key={i}>Question {i + 1}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="connect-content">
          <div className="connect-breadcrumbs">
            <span>Home</span>
            <span className="separator">›</span>
            <span>Support</span>
            <span className="separator">›</span>
            <span>Platform Support</span>
            <span className="separator">›</span>
            <span>Getting Started</span>
            <span className="separator">›</span>
            <span className="current">How to connect your trading account?</span>
          </div>

          <h1>How to connect your trading account?</h1>

          <div className="connect-video-section">
            <div className="connect-video-thumbnail">
              <p>Getting Started: How to connect your trading account?</p>
              <iframe
                width="700"
                height="420"
                src="https://www.youtube.com/embed/xHU5MHuUSKI"
                title="Connect Trading Account"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="connect-steps-container">
        <div className="connect-step">
          <h1>How to connect to MetaTrader 4 (MT4)?</h1>
          <h3>Step 1.</h3>
          <p>Log in to your Market.trad account and navigate to the “Trading Platforms” section.</p>
          <img src="/public/acc5.webp" alt="Step 1" className="connect-step-image" />
        </div>

        <div className="connect-step">
          <h3>Step 2.</h3>
          <p>Select MetaTrader 4 as your trading platform.</p>
          <img src="/public/acc2.webp" alt="Step 2" className="connect-step-image" />
        </div>

        <div className="connect-step">
          <h3>Step 3.</h3>
          <p>Enter your MT4 account credentials provided by Market.trad and follow the on-screen instructions.
            <br /><span>Full Tutorial: How to verify connection?</span></p>
          <img src="/public/acc3.webp" alt="Step 3" className="connect-step-image" />
        </div>

        <div className="connect-step">
          <h3>Step 4.</h3>
          <p>Verify the connection and ensure your MT4 account is active and synced correctly.</p>
          <img src="/public/acc8.webp" alt="Step 4" className="connect-step-image" />
        </div>

        <h1>How to connect to MetaTrader 5 (MT5)?</h1>

        <div className="connect-step">
          <h3>Step 1.</h3>
          <p>Log in to your Market.trad account and navigate to the “Trading Platforms” section.</p>
          <img src="/public/acc7.webp" alt="Step 1" className="connect-step-image" />
        </div>

        <div className="connect-step">
          <h3>Step 2.</h3>
          <p>Select MetaTrader 5 as your trading platform.</p>
          <img src="/public/acc2.webp" alt="Step 2" className="connect-step-image" />
        </div>

        <div className="connect-step">
          <h3>Step 3.</h3>
          <p>Enter your MT5 account credentials provided by Market.trad and follow the on-screen instructions.
            <br /><span>Full Tutorial: How to verify connection?</span></p>
          <img src="/public/acc5.webp" alt="Step 3" className="connect-step-image" />
        </div>

        <div className="connect-step">
          <h3>Step 4.</h3>
          <p>Verify the connection and ensure your MT5 account is active and synced correctly.</p>
          <img src="/public/acc6.webp" alt="Step 4" className="connect-step-image" />
        </div>

        <h1>How to connect to TradingView?</h1>

        <div className="connect-step">
          <h3>Step 1.</h3>
          <p>Log in to your Market.trad account and navigate to the “Trading Platforms” section.</p>
          <img src="/public/acc3.webp" alt="Step 1" className="connect-step-image" />
        </div>

        <div className="connect-step">
          <h3>Step 2.</h3>
          <p>Select TradingView as your trading platform.</p>
          <img src="/public/acc2.webp" alt="Step 2" className="connect-step-image" />
        </div>

        <div className="connect-step">
          <h3>Step 3.</h3>
          <p>Enter your TradingView account credentials provided by Market.trad and follow the on-screen instructions.
            <br /><span>Full Tutorial: How to verify connection?</span></p>
          <img src="/public/acc3.webp" alt="Step 3" className="connect-step-image" />
        </div>

        <div className="connect-step">
          <h3>Step 4.</h3>
          <p>Verify the connection and ensure your TradingView account is active and synced correctly.</p>
          <img src="/public/acc7.webp" alt="Step 4" className="connect-step-image" />
        </div>

        <h1>How to connect to cTrader?</h1>

        <div className="connect-step">
          <h3>Step 1.</h3>
          <p>Log in to your Market.trad account and navigate to the “Trading Platforms” section.</p>
          <img src="/public/acc5.webp" alt="Step 1" className="connect-step-image" />
        </div>

        <div className="connect-step">
          <h3>Step 2.</h3>
          <p>Select cTrader as your trading platform.</p>
          <img src="/public/acc3.webp" alt="Step 2" className="connect-step-image" />
        </div>

        <div className="connect-step">
          <h3>Step 3.</h3>
          <p>Enter your cTrader account credentials provided by Market.trad and follow the on-screen instructions.
            <br /><span>Full Tutorial: How to verify connection?</span></p>
          <img src="/public/acc6.webp" alt="Step 3" className="connect-step-image" />
        </div>

        <div className="connect-step">
          <h3>Step 4.</h3>
          <p>Verify the connection and ensure your cTrader account is active and synced correctly.</p>
          <img src="/public/acc3.webp" alt="Step 4" className="connect-step-image" />
        </div>
      </div>
    </div>
  );
};

export default ConnectTrading;
