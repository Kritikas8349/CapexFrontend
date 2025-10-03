import React, { useState } from "react";
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import "./PartnerNavbar.css";

const PartnerNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    affiliates: false,
    ib: false,
    about: false,
    support: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <nav className="pnav">
      <div className="pnav-container">
        {/* Logo */}
        <a href="/" className="pnav-logo">
          <img src="/logo.png" alt="Logo" />
        </a>

        {/* Mobile Toggle */}
        <div
          className="pnav-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>

        {/* Menu */}
        <ul className={isMobileMenuOpen ? "pnav-menu active" : "pnav-menu"}>
          {/* Affiliates */}
          <li className="pnav-item">
            <button
              onClick={() => toggleDropdown("affiliates")}
              className="pnav-link"
            >
              Affiliates <FaChevronDown className="dropdown-icon" />
            </button>
            {dropdownOpen.affiliates && (
              <ul className="pdropdown">
                <li><a href="#">Affiliates Overview</a></li>
                <li><a href="#">CPA Structures</a></li>
                <li><a href="#">Sub-Affiliates</a></li>
                <li><a href="#">Example Review</a></li>
                <li><a href="#">Affiliates Support</a></li>
              </ul>
            )}
          </li>

          {/* IB Program */}
          <li className="pnav-item">
            <button onClick={() => toggleDropdown("ib")} className="pnav-link">
              IB Program <FaChevronDown className="dropdown-icon" />
            </button>
            {dropdownOpen.ib && (
              <ul className="pdropdown">
                <li><a href="#">IB Overview</a></li>
                <li><a href="#">IB Benefits</a></li>
              </ul>
            )}
          </li>

          {/* About */}
          <li className="pnav-item">
            <button
              onClick={() => toggleDropdown("about")}
              className="pnav-link"
            >
              About <FaChevronDown className="dropdown-icon" />
            </button>
            {dropdownOpen.about && (
              <ul className="pdropdown">
                <li><a href="#">Company</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            )}
          </li>

          {/* Support */}
          <li className="pnav-item">
            <button
              onClick={() => toggleDropdown("support")}
              className="pnav-link"
            >
              Support <FaChevronDown className="dropdown-icon" />
            </button>
            {dropdownOpen.support && (
              <ul className="pdropdown">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            )}
          </li>

          {/* Search */}
          <li className="pnav-item pnav-search">
            <a href="#">
              <FaSearch size={18} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default PartnerNavbar;
