import React, { useState } from "react";
import "./InstallMarkettrad.css"; // create a new CSS file if needed
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

const InstallMarkettrad = () => {
  const [openSection, setOpenSection] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div>
      {/* Main Page */}
      <div className="install-page">
        {/* Sidebar */}
        <div className="install-sidebar">
          {sections.map((sec, index) => (
            <div key={index} className="install-sidebar-item">
              <div
                className={`install-sidebar-header ${openSection === index ? "active" : ""}`}
                onClick={() => toggleSection(index)}
              >
                <img src={sec.img} alt={sec.title} className="install-sidebar-icon" />
                <span className="install-title">{sec.title}</span>
                <span className="install-count">{sec.count}</span>
              </div>
              {openSection === index && (
                <div className="install-dropdown">
                  {Array.from({ length: sec.count }).map((_, i) => (
                    <p key={i}>Question {i + 1}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="install-content">
          <div className="install-breadcrumbs">
            <span>Home</span>
            <span className="separator">›</span>
            <span>Support</span>
            <span className="separator">›</span>
            <span>Platform Support</span>
            <span className="separator">›</span>
            <span>Market.trad Invest</span>
            <span className="separator">›</span>
            <span className="current">How to install and log into Market.trad Invest?</span>
          </div>

          <h1>How to Install and Log into Market.trad Invest?</h1>

          <div className="install-video-section">
            <div className="install-video-thumbnail">
              <p>Installing and Logging into Market.trad</p>
              <iframe
                width="700"
                height="420"
                src="https://www.youtube.com/embed/your-video-id" // replace with actual video
                title="Install Market.trad Tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="install-steps-container">
        <h2>Steps to Install and Log into Market.trad Invest</h2>

        <div className="install-step">
          <h3>Step 1.</h3>
          <p>Download the Market.trad Invest app from our official website or app store.</p>
        </div>

        <div className="install-step">
          <h3>Step 2.</h3>
          <p>Install the application on your device following the instructions provided.</p>
        </div>

        <div className="install-step">
          <h3>Step 3.</h3>
          <p>Open the app and enter your Market.trad Invest account credentials to log in.</p>
        </div>

        <div className="install-step">
          <h3>Step 4.</h3>
          <p>Verify your identity if prompted, and access your trading dashboard.</p>
        </div>
      </div>

      <div className="install-article-footer">
        {/* Share Section */}
        <div className="install-share-section">
          <span className="install-share-label">Share This Article :</span>
          <div className="install-share-icons">
            <FaFacebookF className="share-icon facebook" />
            <FaXTwitter className="share-icon twitter" />
            <FaLinkedinIn className="share-icon linkedin" />
            <FaPinterestP className="share-icon pinterest" />
          </div>
        </div>

        {/* Feedback Section */}
        <div className="install-feedback-box">
          {feedback ? (
            <p className="thank-you">Thanks for your Feedback!</p>
          ) : (
            <>
              <p>Did this answer your question?</p>
              <div className="install-feedback-icons">
                <FaSmile className="feedback-icon" onClick={() => setFeedback("positive")} />
                <FaMeh className="feedback-icon" onClick={() => setFeedback("neutral")} />
                <FaFrown className="feedback-icon" onClick={() => setFeedback("negative")} />
              </div>
            </>
          )}
        </div>

        {/* Navigation Links */}
        <div className="install-article-nav">
          <a href="#" className="prev-link">
            ← Getting Started with Market.trad Invest
          </a>
          <a href="#" className="next-link">
            Funding Your Share Investing Account →
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstallMarkettrad;
