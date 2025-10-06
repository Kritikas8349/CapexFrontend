import React from "react";
import "./AccountSupport.css";

const AccountSupport = () => {
  return (

    <div className="accountcontainer">
    <div className="account-container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb">
        <a href="/">Home</a> <span>›</span>
        <a href="/support">Support</a> <span>›</span>
        <a href="/support">Platform Support</a> <span>›</span>
        <span className="current">Account Support</span>
      </nav>

      {/* Page Heading */}
      <h1 className="page-heading">Account Support</h1>

      {/* Links List */}
      <ul className="account-links">
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> Documents required to open a Company or Trust Account (FMA)
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> Documents required to open a Company or Trust Account (FSA)
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> How to set up an Investor Account?
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> How to reset your login password?
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> How to become a Partner, Affiliate, or IB?
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> How to create a new trading account?
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> How to deposit and withdraw funds?
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> How to set a trading account password?
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default AccountSupport;
