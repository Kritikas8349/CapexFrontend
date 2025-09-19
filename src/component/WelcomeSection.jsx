import React from "react";
import "./WelcomeSection.css";

function WelcomeSection() {
  return (
    <div className="right-container">
      <div className="welcome-content">
        <h1>
          Welcome back!<br />
          Please sign in to your <br />
          <img src="logo.png" alt="Market.trad Logo" className="logo-image" />
          <h1 className="account-heading">Account</h1>
        </h1>
        <p className="rank-info">
          Ranked #1 forex broker in execution speed by Compare ForexBrokers.com
        </p>
      </div>

      <div className="image-section">
        <img src="/macbook.png" alt="Trading Platform Screenshot" />
      </div>
    </div>
  );
}

export default WelcomeSection;