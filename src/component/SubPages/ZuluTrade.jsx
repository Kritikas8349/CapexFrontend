import React from "react";
import "./ZuluTrade.css";

const ZuluTrade = () => {
  return (
    <div className="zulutrade-container">
      <div className="zulutrade-wrapper">
        <h1 className="zulutrade-heading">ZuluTrade Social Trading</h1>

        <div className="zulutrade-description">
          <h3>
            <br />
            <strong>ZuluTrade</strong> is a leading social trading platform that allows
            you to follow and mimic the strategies of expert traders from 192 countries.
          </h3>

          <p>
            <br />
            Using ZuluTrade’s proprietary performance algorithm and community feedback,
            <strong>Market.trad</strong> clients can tailor trades to their own preferences
            and risk tolerance.
          </p>

          <p>
            <strong>Trader Selection:</strong> ZuluRank ranks traders based on overall
            performance, stability, maturity, exposure, and required minimum equity.
            Community reviews also contribute to the ranking, helping you pick the best traders to follow.
          </p>

          <p>
            <strong>Risk Management:</strong> Monitor your risk exposure with the
            <em> Margin-Call-o-Meter</em>. This tool alerts you if your account is at risk,
            turning red if total lots exceed safe levels.
          </p>
        </div>
      </div>

      {/* Highlight Box for Key Features */}
      <div className="zulutrade-features-wrapper">
        <div className="zulutrade-features-box">
          <h2>Other Key Features</h2>
          <ul>
            <li><strong>ZuluGuard:</strong> 24/7 account protection monitoring traders’ performance.</li>
            <li><strong>Simulation:</strong> Test a trader’s strategy before committing funds.</li>
            <li><strong>Customisation:</strong> Full control over your account settings.</li>
            <li><strong>Automator:</strong> Execute automated rules with “if this, then that” logic.</li>
            <li><strong>Availability:</strong> Access ZuluTrade on web and all major mobile platforms.</li>
          </ul>
        </div>
      </div>

      {/* Register Button */}
      <div className="zulutrade-register-wrapper">
        <button className="zulutrade-register-btn">Register for Zulu</button>
        <p className="zulutrade-register-note">
          <br />For existing clients, please contact our friendly support team at{" "}
          <strong>support@market.trad</strong> if you wish to open a ZuluTrade account.
        </p>
      </div>
    </div>
  );
};

export default ZuluTrade;
