import React from "react";
import "./VerificationPayments.css";

const VerificationPayments = () => {
  return (
    <div className="verification-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <div className="hero-text">
            <div className="breadcrumb">
              HOME &gt; ABOUT &gt; LEGAL HUB &gt; VERIFICATION & PAYMENTS
            </div>
            <h1>Verification & Payments</h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-container">
          <div className="content-left">
            <h2>
              Blackbull Partners <br />
              Verification & <br />
              Payments
            </h2>
          </div>
          <div className="content-right">
            <p>
              Verify your account with BlackBull Partners to earn commissions,
              and issue invoices for payments using their provided information.
              Payments are made monthly, and compliance with terms and policies
              is necessary to receive payments. Choose from two payment options
              and contact BlackBull Partners for assistance.
            </p>
          </div>
        </div>
      </section>

      <section className="iamgeside">
      <div className="divn">
        <div className="divnn">
        <h1 className="verificationhead"> Verification</h1>
        <p className="verificationpara"> Depending on the account type that you have, verification may be a required step during the onboarding process with BlackBull Partners. Simply follow the instructions on your account to submit your identification documents during the account approval process.

Commissions will be paid to verified partner accounts only.</p>
      </div>
       <div className="divn1">
         <img src="/12.jpg" alt="Sample" className="divn1-image" />
      </div>
      </div>
      
      </section>

      <section className="payments-section">
  <div className="payments-container">
    <div className="payments-left">
      <h1 className="payments-head">Payments</h1>
      <p className="payments-para">
        If you are an affiliate or network that would like to issue an
        invoice for taxation purposes, please use the following information
        only.
      </p>
      <div className="payments-cards">
        <div className="payment-card">
          <h3>Issue the invoice in the name of:</h3>
          <p><strong>Name:</strong> Black Bull Group Limited</p>
          <p><strong>Address:</strong> Level 20, 188 Quay Street, Auckland, 1010, New Zealand</p>
          <p><strong>Company Number:</strong> NZBN 9429041417799</p>
        </div>
        <div className="payment-card">
          <h3>Payments on behalf of BlackBull Markets are made by:</h3>
          <p><strong>Name:</strong> Black Bull Group Limited</p>
          <p><strong>Address:</strong> Level 20, 188 Quay Street, Auckland, 1010, New Zealand</p>
          <p><strong>Company Number:</strong> NZBN 9429041417799</p>
        </div>
      </div>
    </div>
    
  </div>
</section>
<section className="payments-section">
  <div className="payments-container">
    {/* Left Side */}
    <div className="payments-left">
      <h2 className="payments-head">Wire Transfers Payments</h2>
      <p className="payments-para">
        Minimum payment amount: <strong>$100</strong><br/>
        Please send us the following payment info:
        <ul>
          <li>Cardholder Name</li>
          <li>Card Number</li>
          <li>Expiration Date</li>
          <li>CVV</li>
          <li>Billing Address</li>
          <li>Payment currency (NZD/EUR/USD/GBP/AUD/CAD)</li>
        </ul>
      </p>
      
    </div>

    {/* Right Side */}
    <div className="payments-right">
      <img 
        src="/12.jpg" 
        alt="Credit Card Payment" 
        className="payments-image"
      />
    </div>
  </div>
</section>

    </div>
  );
};

export default VerificationPayments;
