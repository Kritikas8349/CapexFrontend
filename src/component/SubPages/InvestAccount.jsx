import React, { useState } from "react";
import "./InvestAccount.css";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";

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

const InvestAccount = () => {
  const [openSection, setOpenSection] = useState(null);
  const [feedback, setFeedback] = useState(null); // ✅ feedback state

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="investaccountpage">
      
      {/* Main Page */}
      <div className="investaccount-page">
        {/* Sidebar */}
        <div className="investaccount-sidebar">
          {sections.map((sec, index) => (
            <div key={index} className="investaccount-sidebar-item">
              <div
                className={`investaccount-sidebar-header ${
                  openSection === index ? "active" : ""
                }`}
                onClick={() => toggleSection(index)}
              >
                <img
                  src={sec.img}
                  alt={sec.title}
                  className="investaccount-sidebar-icon"
                />
                <span className="investaccount-title">{sec.title}</span>
                <span className="investaccount-count">{sec.count}</span>
              </div>
              {openSection === index && (
                <div className="investaccount-dropdown">
                  {Array.from({ length: sec.count }).map((_, i) => (
                    <p key={i}>Question {i + 1}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Content (KEEP SAME AS FIRSTTRADE) */}
        <div className="investaccount-content">
          <div className="investaccount-breadcrumbs">
            <span>Home</span>
            <span className="separator">›</span>
            <span>Support</span>
            <span className="separator">›</span>
            <span>Platform Support</span>
            <span className="separator">›</span>
            <span>Market.trad Invest</span>
            <span className="separator">›</span>
            <span className="current">How to open a Share Investing Account?</span>
          </div>

          <h1>How to open a Share Investing Account?</h1>

          <div className="investaccount-video-section">
            <div className="investaccount-video-thumbnail">
              <p>Getting Started: How to open a share investing account?</p>
              <iframe
                width="700"
                height="420"
                src="https://www.youtube.com/embed/xHU5MHuUSKI"
                title="Invest Account Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section (Only 4 Steps) */}
      <div className="investaccount-steps-container">
        <h1>Steps to Open Your Share Investing Account</h1>

        <div className="investaccount-step">
          <h3>Step 1.</h3>
          <p>Go to Market.trad and sign up with your email & password.</p>
          <img src="/public/acc8.webp" alt="Step 1" className="investaccount-step-image" />
        </div>

        <div className="investaccount-step">
          <h3>Step 2.</h3>
          <p>Complete KYC by uploading identity and address proof.</p>
          <img src="/public/acc2.webp" alt="Step 2" className="investaccount-step-image" />
        </div>

        <div className="investaccount-step">
          <h3>Step 3.</h3>
          <p>Choose Share Investing account type and verify your details.</p>
          <img src="/public/acc3.webp" alt="Step 3" className="investaccount-step-image" />
        </div>

        <div className="investaccount-step">
          <h3>Step 4.</h3>
          <p>Deposit funds and start trading securely on Market.trad.</p>
          <img src="/public/acc5.webp" alt="Step 4" className="investaccount-step-image" />
        </div>
      </div>

      <div className="article-footer">
        {/* Share Section */}
        <div className="share-section">
          <span className="share-label">Share This Article :</span>
          <div className="share-icons">
            <FaFacebookF className="share-icon facebook" />
            <FaXTwitter className="share-icon twitter" />
            <FaLinkedinIn className="share-icon linkedin" />
            <FaPinterestP className="share-icon pinterest" />
          </div>
        </div>

        {/* Feedback Section */}
        <div className="feedback-box">
          {feedback ? (
            <p className="thank-you">Thanks for your Feedback!</p>
          ) : (
            <>
              <p>Did this answer your question?</p>
              <div className="feedback-icons">
                <FaSmile className="feedback-icon" onClick={() => setFeedback("positive")} />
                <FaMeh className="feedback-icon" onClick={() => setFeedback("neutral")} />
                <FaFrown className="feedback-icon" onClick={() => setFeedback("negative")} />
              </div>
            </>
          )}
        </div>

        {/* Navigation Links */}
        <div className="article-nav">
          <a href="#" className="prev-link">
            ← Transition to Market.trad from Rockfort
          </a>
          <a href="#" className="next-link">
            How to fund your Share Investing account? →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvestAccount;
