import React from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./TradeNavbar.css";


function TradeNavbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark user-nav-bg px-3 py-2">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <h1>Market.trade</h1>

        </Link>

        {/* Hamburger Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <i className="bi bi-list fs-2 text-white"></i>
        </button>

        {/* Menu Links */}
        <div className="collapse navbar-collapse justify-content-between bg-transparent" id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex flex-lg-row flex-column align-items-lg-center gap-lg-4 gap-2 text-start">
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold text-white" to="/trade/market">Market</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold text-white" to="/trade">Trade</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold text-white" to="/crypto-currency">Crypto Currency</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold text-white" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold text-white" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold text-white" to="/dashboard">Go to Website</NavLink>
            </li>
          </ul>



          {/* Right Side Section */}
          <div className="d-flex align-items-start flex-lg-row flex-column gap-3 text-start mt-3 mt-lg-0 justify-content-start">
            

            <Link
              to="/dashboard"
              className="btn btn-primary fw-semibold px-3 py-1"
            >
              Dashboard
            </Link>

            <Link className="text-white fw-semibold text-decoration-none" to="/logout">
              Logout
            </Link>

            <i className="bi bi-moon-fill text-white fs-5"></i>
          </div>
        </div>
      </div>
    </nav>
    
    </>
  );
}

export default TradeNavbar;
