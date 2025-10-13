import React, { useState } from "react";
import "./FundInvest.css"; // You can create a new CSS file if needed
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";

const sections = [
  { title: "Getting Started", img: "pf4.svg", count: 6 },
  { title: "Secure Client Area", img: "pf2.webp", count: 8 },
  { title: "TradingView", img: "Pf1.webp", count: 29 },
  { title: "MetaTrader 5", img: "pf3.webp", count: 28 },
  { title: "MetaTrader 4", img: "pf3.webp", count: 17 },
  { title: "Market.trad Invest", img: "pf4.svg", count: 7 },
  { title: "cTrader", img: "pf4.svg", count: 22 },
  { title: "Account Support", img: "pf4.svg", count: 8 },
];

const FundInvest = () => {
  const [openSection, setOpenSection] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="fundinvestpage">
      {/* Main Page */}
      <div className="fundinvest-page">
        {/* Sidebar */}
        <div className="fundinvest-sidebar">
          {sections.map((sec, index) => (
            <div key={index} className="fundinvest-sidebar-item">
              <div
                className={`fundinvest-sidebar-header ${openSection === index ? "active" : ""}`}
                onClick={() => toggleSection(index)}
              >
                <img src={sec.img} alt={sec.title} className="fundinvest-sidebar-icon" />
                <span className="fundinvest-title">{sec.title}</span>
                <span className="fundinvest-count">{sec.count}</span>
              </div>
              {openSection === index && (
                <div className="fundinvest-dropdown">
                  {Array.from({ length: sec.count }).map((_, i) => (
                    <p key={i}>Question {i + 1}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="fundinvest-content">
          <div className="fundinvest-breadcrumbs">
            <span>Home</span>
            <span className="separator">›</span>
            <span>Support</span>
            <span className="separator">›</span>
            <span>Platform Support</span>
            <span className="separator">›</span>
            <span>Market.trad Invest</span>
            <span className="separator">›</span>
            <span className="current">How to fund your Share Investing account?</span>
          </div>

          <h1>How to fund your Share Investing account?</h1>

          <div className="fundinvest-video-section">
            <div className="fundinvest-video-thumbnail">
              <p>Funding Your Share Investing Account</p>
              <iframe
                width="700"
                height="420"
                src="https://www.youtube.com/embed/your-video-id" // replace with actual video
                title="Fund Invest Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="fundinvest-steps-container">
  <h2>How to Fund Your Share Investing Account</h2>

  <div className="fundinvest-steps-text">
    <p>
      After your account has been approved, you can fund your Share Investing account by following these steps:
    </p>
    <ol>
      <li>Log into your online bank account.</li>
      <li>
        Transfer funds to the Market.trad Markets ANZ Bank account using the details below. Make sure to include your account number (U********) as the payment reference.
      </li>
      <li>
        Send the transaction receipt to <a href="mailto:finance@Market.trad.com">finance@Market.trad.com</a> and include your account number in the email subject.
      </li>
      <li>
        Wait for an email confirmation that your funds have been credited to your Share Investing account.
      </li>
      <li>
        Note: The minimum deposit required is 1,000 in your base currency.
      </li>
    </ol>
  </div>

  <div className="fundinvest-bank-details">
    <h3>Bank Details</h3>
    <table>
      <tbody>
        <tr>
          <td>Bank Name</td>
          <td>ANZ Bank NZ Limited</td>
        </tr>
        <tr>
          <td>Bank Address</td>
          <td>205 Queen Street, Auckland, New Zealand 1010</td>
        </tr>
        <tr>
          <td>Account Number</td>
          <td>06-0188-0168410-04</td>
        </tr>
        <tr>
          <td>Beneficiary Name</td>
          <td>Black Bull Group Limited</td>
        </tr>
        <tr>
          <td>Beneficiary Address</td>
          <td>Level 20, 188 Quay Street, Auckland, 1010, New Zealand</td>
        </tr>
        <tr>
          <td>Support Contact</td>
          <td><a href="mailto:support@Market.trad.com">support@Market.trad.com</a> or contact your account manager</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

      

      <div className="fundinvest-article-footer">
        {/* Share Section */}
        <div className="fundinvest-share-section">
          <span className="fundinvest-share-label">Share This Article :</span>
          <div className="fundinvest-share-icons">
            <FaFacebookF className="share-icon facebook" />
            <FaXTwitter className="share-icon twitter" />
            <FaLinkedinIn className="share-icon linkedin" />
            <FaPinterestP className="share-icon pinterest" />
          </div>
        </div>

        {/* Feedback Section */}
        <div className="fundinvest-feedback-box">
          {feedback ? (
            <p className="thank-you">Thanks for your Feedback!</p>
          ) : (
            <>
              <p>Did this answer your question?</p>
              <div className="fundinvest-feedback-icons">
                <FaSmile className="feedback-icon" onClick={() => setFeedback("positive")} />
                <FaMeh className="feedback-icon" onClick={() => setFeedback("neutral")} />
                <FaFrown className="feedback-icon" onClick={() => setFeedback("negative")} />
              </div>
            </>
          )}
        </div>

        {/* Navigation Links */}
        <div className="fundinvest-article-nav">
          <a href="#" className="prev-link">
            ← How to open a Share Investing Account?
          </a>
          <a href="#" className="next-link">
            Managing Your Investments →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FundInvest;
