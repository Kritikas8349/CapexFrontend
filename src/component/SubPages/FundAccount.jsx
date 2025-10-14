import React, { useState } from "react";
import "./FundAccount.css";
import { Link } from "react-router-dom";

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

const FundAccount = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="fundacc">
    <div className="fundacc1">

    <div className="fundaccount">
      {/* Main Fund Account Page */}
      <div className="fund-page">
        {/* Sidebar */}
        <div className="fund-sidebar">
          {sections.map((sec, index) => (
            <div key={index} className="fund-sidebar-item">
              <div
                className={`fund-sidebar-header ${openSection === index ? "active" : ""}`}
                onClick={() => toggleSection(index)}
              >
                <img src={sec.img} alt={sec.title} className="fund-sidebar-icon" />
                <span className="fund-title">{sec.title}</span>
                <span className="fund-count">{sec.count}</span>
              </div>
              {openSection === index && (
                <div className="fund-dropdown">
                  {Array.from({ length: sec.count }).map((_, i) => (
                    <p key={i}>Question {i + 1}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="fund-content">
        <div className="fund-breadcrumbs">
      <Link to="/" className="breadcrumb-link">Home</Link>
      <span className="separator">›</span>

      <Link to="/support" className="breadcrumb-link">Support</Link>
      <span className="separator">›</span>

      <Link to="/support/platform-support" className="breadcrumb-link">Platform Support</Link>
      <span className="separator">›</span>

      <Link to="/support/getting-started" className="breadcrumb-link">Getting Started</Link>
      <span className="separator">›</span>

      <span className="current">How to fund your Market.trad account?</span>
    </div>

          <h1 className="head3">How to fund your Market.trad account?</h1>

          <div className="fund-video-section">
            <div className="fund-video-thumbnail">
              <p>Getting Started: How to fund your Market.trad account?</p>
              <iframe
                width="700"
                height="420"
                src="https://www.youtube.com/embed/xHU5MHuUSKI"
                title="Market.trad Fund Account"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

      {/* Steps Section */}
      <div className="fund-steps-container">
        <div className="fund-step">
          <h3>Step 1.</h3>
          <p>Log in to your Market.trad account and go to the “Wallet” section.</p>
          <img src="acc2.webp" alt="Step 1" className="fund-step-image" />
        </div>

        <div className="fund-step">
          <h3>Step 2.</h3>
          <p>Select your preferred deposit method such as bank transfer, credit/debit card, or e-wallet.</p>
          <img src="acc6.webp" alt="Step 2" className="fund-step-image" />
        </div>

        <div className="fund-step">
          <h3>Step 3.</h3>
          <p>Enter the amount you wish to deposit and follow the instructions to complete the transaction.
            <br /><span>Full Tutorial: How to verify your payment?</span></p>
          <img src="acc5.webp" alt="Step 3" className="fund-step-image" />
        </div>

        <div className="fund-step">
          <h3>Step 3.</h3>
          <p>Enter the amount you wish to deposit and follow the instructions to complete the transaction.
            <br /><span>Full Tutorial: How to verify your payment?</span></p>
          <img src="acc8.webp" alt="Step 3" className="fund-step-image" />
        </div>

      </div>
    </div>
  );
};

export default FundAccount;
