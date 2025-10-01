import React, { useState } from "react";
import "./ChangeCurrency.css"; // create a new CSS file
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";

const sections = [
  { title: "Getting Started", img: "/public/pf4.svg", count: 6 },
  { title: "Secure Client Area", img: "/public/pf2.webp", count: 8 },
  { title: "TradingView", img: "/public/Pf1.webp", count: 29 },
  { title: "MetaTrader 5", img: "/public/pf3.webp", count: 28 },
  { title: "MetaTrader 4", img: "/public/pf3.webp", count: 17 },
  { title: "Market.trad Invest", img: "/public/pf4.svg", count: 7 },
  { title: "cTrader", img: "/public/pf4.svg", count: 22 },
  { title: "Account Support", img: "/public/pf4.svg", count: 8 },
];

const ChangeCurrency = () => {
  const [openSection, setOpenSection] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div>
      {/* Main Page */}
      <div className="change-page">
        {/* Sidebar */}
        <div className="change-sidebar">
          {sections.map((sec, index) => (
            <div key={index} className="change-sidebar-item">
              <div
                className={`change-sidebar-header ${openSection === index ? "active" : ""}`}
                onClick={() => toggleSection(index)}
              >
                <img src={sec.img} alt={sec.title} className="change-sidebar-icon" />
                <span className="change-title">{sec.title}</span>
                <span className="change-count">{sec.count}</span>
              </div>
              {openSection === index && (
                <div className="change-dropdown">
                  {Array.from({ length: sec.count }).map((_, i) => (
                    <p key={i}>Question {i + 1}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="change-content">
          <div className="change-breadcrumbs">
            <span>Home</span>
            <span className="separator">›</span>
            <span>Support</span>
            <span className="separator">›</span>
            <span>Platform Support</span>
            <span className="separator">›</span>
            <span>Market.trad Invest</span>
            <span className="separator">›</span>
            <span className="current">How to Change Currency in a Cash Account</span>
          </div>

          <h1>How to Change Currency in Your Cash Account</h1>

          {/* Paragraph instead of video */}
          <div className="change-paragraph-section">
            <p>
              Before placing an order, ensure that your Cash Account holds funds in the same currency as your order. 
              You can manually convert your available funds to the desired currency using the following steps:
            </p>

            <ol>
              <li>
                Open the More menu, select Trade, and tap on Convert Currency.
              </li>
              <li>
                Tap <strong>Currency I Have</strong> to view the currencies in which you have a positive balance.
              </li>
              <li>
                Select your current currency and tap Done.
              </li>
              <li>
                Tap <strong>Currency I Want</strong> and choose the currency you wish to convert to, then tap Done.
              </li>
              <li>
                Enter the amount in either field:
                <ul>
                  <li>Specify the target amount in <strong>Currency I Want</strong> if you know how much you need.</li>
                  <li>Or enter the original amount in <strong>Currency I Have</strong>; the converted value is calculated automatically.</li>
                </ul>
              </li>
              <li>
                Review your order details and slide the <strong>Slide To Submit</strong> button to complete the conversion.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Article Footer */}
      <div className="change-article-footer">
        {/* Share Section */}
        <div className="change-share-section">
          <span className="change-share-label">Share This Article :</span>
          <div className="change-share-icons">
            <FaFacebookF className="share-icon facebook" />
            <FaXTwitter className="share-icon twitter" />
            <FaLinkedinIn className="share-icon linkedin" />
            <FaPinterestP className="share-icon pinterest" />
          </div>
        </div>

        {/* Feedback Section */}
        <div className="change-feedback-box">
          {feedback ? (
            <p className="thank-you">Thanks for your Feedback!</p>
          ) : (
            <>
              <p>Did this answer your question?</p>
              <div className="change-feedback-icons">
                <FaSmile className="feedback-icon" onClick={() => setFeedback("positive")} />
                <FaMeh className="feedback-icon" onClick={() => setFeedback("neutral")} />
                <FaFrown className="feedback-icon" onClick={() => setFeedback("negative")} />
              </div>
            </>
          )}
        </div>

        {/* Navigation Links */}
        <div className="change-article-nav">
          <a href="#" className="prev-link">
            ← Getting Started with Market.trad Invest
          </a>
          <a href="#" className="next-link">
            Managing Your Investments →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ChangeCurrency;
