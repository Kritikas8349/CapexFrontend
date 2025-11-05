import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./TradeNavbar.css";

function TradeNavbar() {
  return (
    <nav className="navbar navbar-expand-lg user-nav-bg trade-navbar px-3 py-2">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          {/* <img src="/logo.png" alt="Vinance Logo" className="navbar-logo me-2" /> */}
          <div>
            <h2 className="mb-0 fw-bold">
              <span className="text-light">Market.Trade</span>
            </h2>
            
          </div>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2 text-white"></i>
        </button>

        {/* Menu Section */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">

  {/* Center Nav Links */}
  <ul className="navbar-nav mx-auto d-flex flex-lg-row flex-column align-items-lg-center align-items-start gap-lg-4 gap-3 mb-3 mb-lg-0">
    <li className="nav-item">
      <NavLink className="nav-link text-white fw-semibold" to="market-overview">Market</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-white fw-semibold" to="/trade">Trade</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-white fw-semibold" to="crypto-currency">Crypto Currency</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-white fw-semibold" to="about-us">About</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-white fw-semibold" to="contact">Contact</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link text-white fw-semibold" to="/">Go to Website</NavLink>
    </li>
  </ul>

  {/* Right Section */}
  <div className="navbar-right d-flex flex-lg-row flex-column align-items-lg-center align-items-start gap-3 mb-3 mb-lg-0">
    <Link to="/userdashboard" className="btn btn-primary fw-semibold px-3 py-1 rounded-3">
      Dashboard
    </Link>

    <Link className="text-white fw-semibold text-decoration-none" to="/">
      Logout
    </Link>
  </div>

</div>

      </div>
    </nav>
  );
}

export default TradeNavbar;
