import React from "react";
import './SideBarAccordian.css'
import { Link } from "react-router-dom";

const SidebarAccordion = () => {
  const menuItems = [
    "Leverage",
    "Swap Free Accounts",
    "Trading conditions overview",
    "Contract Specifications",
    "Contract Expiries",
    "What are your minimum deposits?",
    "Trading Hour Changes",
    "Why is a triple swap charged?",
    "Who are your liquidity providers?",
    "Restricted Countries",
  ];

  const securityItems = [
    "Segregated Client Accounts",
    "Investor Compensation Fund",
    "Negative Balance Protection",
    "Tier 1 Banking Partners",
  ];

  return (
    <div className="col-12 col-md-3 col-lg-4 p-3 bg-light border-end">
      <div className="accordion" id="sidebarAccordion">
        {/* Trading Conditions Accordion */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingConditions">
            <button
              className="accordion-button no-arrow d-flex align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseConditions"
              aria-expanded="true"
              aria-controls="collapseConditions"
            >
              <i className="bi bi-graph-up-arrow me-2"></i> Trading Conditions
              <span className="badge bg-primary ms-auto">{menuItems.length}</span>
            </button>
          </h2>
          <div
            id="collapseConditions"
            className="accordion-collapse collapse show"
            aria-labelledby="headingConditions"
            data-bs-parent="#sidebarAccordion"
          >
            <div className="accordion-body p-0">
              <ul className="nav flex-column small">
                {menuItems.map((item, i) => (
                  <li className="nav-item" key={i}>
                    <Link
                      to="#"
                      className={`nav-link d-flex align-items-center px-3 py-2 ${
                        item === "Trading Hour Changes" ? "text-primary fw-semibold" : "text-dark"
                      }`}
                    >
                      <i className="bi bi-file-earmark-text me-2"></i>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Security of Funds Accordion */}
        <div className="accordion-item mt-3">
          <h2 className="accordion-header" id="headingSecurity">
            <button
              className="accordion-button collapsed no-arrow d-flex align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSecurity"
              aria-expanded="false"
              aria-controls="collapseSecurity"
            >
              <i className="bi bi-bank me-2"></i> Security of Funds
              <span className="badge bg-primary ms-auto">{securityItems.length}</span>
            </button>
          </h2>
          <div
            id="collapseSecurity"
            className="accordion-collapse collapse"
            aria-labelledby="headingSecurity"
            data-bs-parent="#sidebarAccordion"
          >
            <div className="accordion-body p-0">
              <ul className="nav flex-column small">
                {securityItems.map((item, i) => (
                  <li className="nav-item" key={i}>
                    <Link
                      to="#"
                      className="nav-link d-flex align-items-center px-3 py-2 text-dark"
                    >
                      <i className="bi bi-shield-lock me-2"></i>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarAccordion;
