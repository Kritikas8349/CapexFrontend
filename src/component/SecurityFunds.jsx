import React from "react";
import "./SecurityFunds.css";

const SecurityFunds = () => {
  return (
    <div className="security-container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb">
        <a href="/">Home</a> <span>›</span>
        <a href="/support">Support</a> <span>›</span>
        <a href="/support/market">Market Support</a> <span>›</span>
        <span className="current">Security of Funds</span>
      </nav>

      {/* Page Heading */}
      <h1 className="page-heading">Security of Funds</h1>

      {/* Links List */}
      <ul className="security-links">
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> Is Market.trad an ECN broker?
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> Is Market.trad operating as an NDD broker?
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> Registration, AML policies, and security framework
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> Where are client funds securely held?
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SecurityFunds;
