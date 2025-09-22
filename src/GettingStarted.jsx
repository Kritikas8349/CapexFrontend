import React from "react";
import "./GettingStarted.css";

const GettingStarted = () => {
  return (
    <div className="getting-container">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb">
        <a href="/">Home</a> <span>›</span>
        <a href="/support">Support</a> <span>›</span>
        <a href="/support">Platform Support</a> <span>›</span>
        <span className="current">Getting Started</span>
      </nav>

      {/* Page Heading */}
      <h1 className="page-heading">Getting Started</h1>

      {/* Links List */}
      <ul className="getting-links">
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> How to fund your account?
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> How to place your first trade?
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> How to connect to your trading platform?
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> How to verify your account?
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> How to create your Market.trad account?
          </a>
        </li>
        <li>
          <a href="#">
            <span className="doc-icon">📄</span> What is the suitability quiz?
          </a>
        </li>
      </ul>
    </div>
  );
};

export default GettingStarted;
