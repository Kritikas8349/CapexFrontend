import React from "react";
import { FaSearch, FaFilePdf } from "react-icons/fa"; // Added PDF icon
import "./AffiliateSupport.css";

const SupportPage = () => {
  const faqs = [
    "How to sign up as an Affiliate?",
    "How to get your sub-affiliate tracking link?",
    "How to earn commission?",
    "How often will you get paid?",
    "How to access the marketing materials?",
    "How to request the payment?",
    "How to get your tracking link?",
  ];

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <div 
        className="support-hero-section" 
        style={{ backgroundImage: `url('/SupportBg.jpg')` }}
      >
        <div className="support-overlay"></div>
        <div className="support-content">
          <h1 className="support-heading">Affiliates - Support</h1>
          <p className="support-subheading">
            Search our knowledge base for answers to common questions
          </p>
          <div className="support-search-wrapper">
            <input 
              type="text" 
              className="support-search-input" 
              placeholder="Search..."
            />
            <span className="support-search-icon">
              <FaSearch />
            </span>
          </div>
        </div>
      </div>

      {/* ===== Breadcrumbs ===== */}
      <div className="bred-div">
        <div className="support-breadcrumbs">
          <span>Home</span> &gt;
          <span> Support</span> &gt;
          <span> Affiliates</span> &gt;
          <span className="active"> Support</span>
        </div>

        {/* ===== FAQ Section ===== */}
        <section className="support-faqs">
          <h2 className="support-faqs-heading">Affiliates Support Articles</h2>
          <ul className="support-faqs-list">
            {faqs.map((faq, index) => (
              <li key={index} className="support-faqs-item">
                <a href="#" className="support-faqs-link">
                  <FaFilePdf className="faq-pdf-icon" /> {/* PDF icon */}
                  {faq}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SupportPage;
