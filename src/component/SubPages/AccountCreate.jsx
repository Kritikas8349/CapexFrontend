import React, { useState } from "react";
import "./AccountCreate.css";

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

const AccountCreate = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="accountsunique">
      {/* Main Account Page */}
      <div className="account-page">
        {/* Sidebar */}
        <div className="sidebar">
          {sections.map((sec, index) => (
            <div key={index} className="sidebar-item">
              <div
                className={`sidebar-header ${openSection === index ? "active" : ""}`}
                onClick={() => toggleSection(index)}
              >
                <img src={sec.img} alt={sec.title} className="sidebar-icon" />
                <span className="title">{sec.title}</span>
                <span className="count">{sec.count}</span>
              </div>
              {openSection === index && (
                <div className="dropdown">
                  {Array.from({ length: sec.count }).map((_, i) => (
                    <p key={i}>Question {i + 1}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="content">
          <div className="breadcrumbs">
            <span>Home</span>
            <span className="separator">›</span>
            <span>Support</span>
            <span className="separator">›</span>
            <span>Platform Support</span>
            <span className="separator">›</span>
            <span>Getting Started</span>
            <span className="separator">›</span>
            <span className="current">How to create your Market.trad account?</span>
          </div>

          <h1 className="head">How to create your Market.trad account?</h1>

          <div className="video-section">
          
            <div className="video-thumbnail">
              <p>Getting Started: How to create your Market.trad account?</p>
              <iframe
                width="700"
                height="420"
                src="https://www.youtube.com/embed/xHU5MHuUSKI"
                title="Market.trad Account Creation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="steps-container">
        <div className="step">
          <h3>Step 1.</h3>
          <p>From the Market.trad.com homepage, enter your email address and click “Join Now.”</p>
          <img src="/public/create.png" alt="Step 1" className="step-image" />
        </div>

        <div className="step">
          <h3>Step 2.</h3>
          <p>Enter your personal details and set a password for your BlackBull Markets Account.</p>
          <img src="/public/acc2.webp" alt="Step 2" className="step-image" />
        </div>

        <div className="step">
          <h3>Step 3.</h3>
          <p>State your account type and input your residential address.</p>
          <img src="/public/acc3.webp" alt="Step 2" className="step-image" />
        </div>

        <div className="step">
          <h3>Step 4.</h3>
          <p>Select the conditions for your first trading account, including whether you want a Standard or Prime account.</p>
          <img src="/public/acc4.jpg" alt="Step 2" className="step-image" />
        </div>

        <div className="step">
          <h3>Step 5.</h3>
          <p>State your employment information and source of funds.</p>
          <img src="/public/acc5.webp" alt="Step 2" className="step-image" />
        </div>

        <div className="step">
          <h3>Step 6.</h3>
          <p>You may have to complete a suitability quiz. Answer at least 4 out of 5 questions correctly to proceed.
            <br /><span>Full Tutorial: What is the suitability quiz?</span></p>
          <img src="/public/acc6.webp" alt="Step 2" className="step-image" />
        </div>

        <div className="step">
          <h3>Step 7.</h3>
          <p>Verify your account by providing a scan or photograph of an ID (such as a passport or driver’s license) along with a proof of address document.
          <br /><span>Full Tutorial: How to verify your account?</span></p>
          <img src="/public/acc7.webp" alt="Step 2" className="step-image" />
        </div>

        <div className="step">
          <h3>Step 8.</h3>
          <p>Your application will be reviewed by our support team. Please fund your wallet in anticipation of its approval.
          <br /> <span>Full Tutorial: How to fund your account?</span></p>
          <img src="/public/acc8.webp" alt="Step 2" className="step-image" />
        </div>

        
      </div>
    </div>
  );
};

export default AccountCreate;
