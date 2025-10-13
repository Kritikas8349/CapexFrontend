import React, { useState } from "react";
import "./VerifyAccount.css";

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

const VerifyAccount = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="verifyunique">
      {/* Main Verify Account Page */}
      <div className="verify-page">
        {/* Sidebar */}
        <div className="verify-sidebar">
          {sections.map((sec, index) => (
            <div key={index} className="verify-sidebar-item">
              <div
                className={`verify-sidebar-header ${openSection === index ? "active" : ""}`}
                onClick={() => toggleSection(index)}
              >
                <img src={sec.img} alt={sec.title} className="verify-sidebar-icon" />
                <span className="verify-title">{sec.title}</span>
                <span className="verify-count">{sec.count}</span>
              </div>
              {openSection === index && (
                <div className="verify-dropdown">
                  {Array.from({ length: sec.count }).map((_, i) => (
                    <p key={i}>Question {i + 1}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="verify-content">
          <div className="verify-breadcrumbs">
            <span>Home</span>
            <span className="separator">›</span>
            <span>Support</span>
            <span className="separator">›</span>
            <span>Platform Support</span>
            <span className="separator">›</span>
            <span>Getting Started</span>
            <span className="separator">›</span>
            <span className="current">How to verify your Market.trad account?</span>
          </div>

          <h1 className="head1">How to verify your Market.trad account?</h1>

          <div className="verify-video-section">
            <div className="verify-video-thumbnail">
              <p>Getting Started: How to verify your Market.trad account?</p>
              <iframe
                width="700"
                height="420"
                src="ttps://www.youtube.com/embed/xHU5MHuUSKI"
                title="Market.trad Account Verification"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="verify-steps-container">
        <div className="verify-step">
          <h3>Step 1.</h3>
          <p>Select the proof of ID type that you want to submit from the dropdown menu.
        <br />If you are submitting a driver’s license or a national ID card, we require a scan or photograph of both sides of the id. </p>
          <img src="acc2.webp" alt="Step 1" className="verify-step-image" />
        </div>

        <div className="verify-step">
          <h3>Step 2.</h3>
          <p>Select the proof of address type that you want to submit. We accept bank statement, credit card statements, government cards and utility bills. </p>
          <img src="acc6.webp" alt="Step 2" className="verify-step-image" />
        </div>

        <div className="verify-step">
          <h3>Step 3.</h3>
          <p>Your application will be reviewed by our support team. Please fund your wallet in anticipation of its approval.
            <span><br />Full Tutorial: How to fund your account?</span></p>
          <img src="acc7.webp" alt="Step 3" className="verify-step-image" />
        </div>

      </div>
    </div>
  );
};

export default VerifyAccount;
