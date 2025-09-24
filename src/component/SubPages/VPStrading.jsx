import React from "react";
import "./VPStrading.css";

const VPStrading = () => {
  return (
    
      <div className="vps-trading-container">
        <div className="vps-trading-wrapper">
        <h1 className="vps-trading-heading">VPS Trading</h1>

        <div className="vps-trading-text">
            <h3><br />A <strong>Virtual Private Server (VPS)</strong> is a powerful tool
            designed to enhance and customize your trading experience.</h3>
          <p>
             <br />At{" "}
            <strong>Market.trad</strong>, we provide a reliable VPS solution in
            partnership with <strong>ForexVPS</strong>, a global leader in hosting
            trading infrastructure.
          </p>

          <p>
            Our servers are located in <strong>New York, London, and Tokyo</strong>,
            strategically positioned close to major financial exchanges. This setup
            ensures faster execution speeds, reduced latency, and highly dependable
            connectivity for your trades.
          </p>

          <p>
            <strong>Market.trad</strong> offers VPS services <strong>free of charge</strong> 
            for clients who qualify. To access this benefit, traders are required to
            maintain a minimum balance of <strong>USD $2,000</strong> and execute at
            least <strong>20 standard lots</strong> in forex pairs or metals each month.
          </p>

          <p>
            If trading requirements are not met, a small monthly fee of{" "}
            <strong>USD $25</strong> will apply to cover VPS hosting costs.
          </p>
        </div>
    </div>    

        {/* Grey Box for Key Benefits */}
        <div className="vps-trading-boxes">
          <div className="vps-trading-box">
            <h2>Key Benefits of a VPS</h2>
            <ul>
              <li>
                Fully compatible with Market.trad MetaTrader 4, MetaTrader 5, and
                cTrader platforms.
              </li>
              <li>Up to 30% lower latency for faster trade execution.</li>
              <li>99.999% uptime for continuous, uninterrupted trading.</li>
              <li>Advanced security options to protect your strategies.</li>
              <li>Minimizes slippage during high market volatility.</li>
              <li>Automatic data backups for added reliability.</li>
            </ul>
          </div>
        </div>

        <div className="vps-register-wrapper">
      <div className="vps-register-container">
        <h1 className="vps-register-title">Register for a VPS</h1>

        {/* Form */}
        <form className="vps-register-form">
          {/* Name */}
          <label className="vps-register-label">
            Name <span className="vps-register-required">(Required)</span>
          </label>
          <div className="vps-register-row">
            <input type="text" placeholder="First" required className="vps-register-input" />
            <input type="text" placeholder="Last" required className="vps-register-input" />
          </div>

          {/* Email */}
          <label className="vps-register-label">
            Email <span className="vps-register-required">(Required)</span>
          </label>
          <div className="vps-register-row">
            <input type="email" placeholder="Enter Email" required className="vps-register-input" />
            <input type="email" placeholder="Confirm Email" required className="vps-register-input" />
          </div>

          {/* Trading Account */}
          <label className="vps-register-label">
            Trading Account Number <span className="vps-register-required">(Required)</span>
          </label>
          <p className="vps-register-subtext">MT4/5 - cTrader Account number</p>
          <input type="text" required className="vps-register-input" />

          {/* Note */}
          <p className="vps-register-note">
            *Please be advised that this form undergoes an approval process,
            which may require a period of 1 to 3 business days for completion.
          </p>

          {/* Submit */}
          <button type="submit" className="vps-register-btn">
            Submit
          </button>
        </form>
      </div>

      {/* ✅ Video is OUTSIDE of the form + container */}
      <div className="vps-register-video">
        <video controls>
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

    </div>
  );
};

export default VPStrading;
