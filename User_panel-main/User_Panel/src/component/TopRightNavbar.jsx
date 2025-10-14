import React, { useState } from "react";
import { FaCopy, FaCaretDown, FaCaretUp } from "react-icons/fa";
import "./TopRightNavbar.css";
import { Link, useNavigate } from "react-router-dom";

const TopRightNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate(); // hook for navigation
  const username = "KajalSingh";
  const referralLink = "https://script.viserlab.com/vinance?reference";

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const goToTradePage = () => {
    navigate("/trade"); // navigate to your Trade page
  };

  return (
    <div className="topright-navbar">
      <div className="referral-box">
        <span className="ref-link">{referralLink}</span>
        <FaCopy className="copy-icon" onClick={copyLink} />
        {showPopup && <div className="copy-popup">Link copied!</div>}
      </div>

      <div className="right-section">
        <button className="trade-btn" onClick={goToTradePage}>
          Trade
        </button>

        <div className="user-dropdown" style={{ position: "relative" }}>
          <span className="username">{username}</span>
          <span
            className="dropdown-arrow"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
          </span>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link
                to="/profile"
                onClick={() => setDropdownOpen(false)}
                className="dropdown-item"
              >
                Profile
              </Link>
              <Link
                to="/change-password"
                onClick={() => setDropdownOpen(false)}
                className="dropdown-item"
              >
                Change Password
              </Link>
              <Link
                to="/logout"
                onClick={() => setDropdownOpen(false)}
                className="dropdown-item"
              >
                Log-Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopRightNavbar;
