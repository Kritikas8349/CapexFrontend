import React from "react";
import "./Myfxbook.css";

const Myfxbook = () => {
  return (
    <div className="myfxbook-container">
      {/* Main Wrapper */}
      <div className="myfxbook-wrapper">
        <h1 className="myfxbook-heading">Myfxbook Social Trading</h1>

        <div className="myfxbook-description">
          <h3>
            <strong><br />Myfxbook</strong> is a leading social trading platform that enables
            users to share, analyse, track, and compare their trading activities.
          </h3>

          <p>
            <br />With Myfxbook, you can set up auto-trading to follow traders you select,
            or become the lead trader in an auto-trading network. Its intuitive interface
            makes managing trades simple and efficient.
          </p>

          <p>
            The platform allows you to monitor your trading behaviour, discover statistical
            trends, and improve your strategies using insights from the Myfxbook community.
          </p>
        </div>
      </div>

      {/* Highlight Box for Key Benefits */}
      <div className="myfxbook-features-wrapper">
        <div className="myfxbook-features-box">
          <h2>Key Benefits of Myfxbook</h2>
          <ul>
            <li>Analyze your trading account to identify habits and trends.</li>
            <li>Innovative and intuitive interface to stay updated with the market.</li>
            <li>Public record of competency for Money Managers to showcase your trades.</li>
            <li>Publish account statements and performance reports.</li>
            <li>Develop, compare, and improve trading skills with community support.</li>
            <li>Multiple chart setups for better analysis.</li>
            <li>Automated trading capabilities.</li>
            <li>Direct order execution options.</li>
          </ul>
        </div>
      </div>

      {/* Register Button Section */}
      <div className="myfxbook-register-wrapper">
        <button className="myfxbook-register-btn">Register for Myfxbook</button>
        <p className="myfxbook-register-note">
          <br />For further support, please contact our friendly team at{" "}
          <strong>support@market.trad</strong>.
        </p>
      </div>
    </div>
  );
};

export default Myfxbook;
