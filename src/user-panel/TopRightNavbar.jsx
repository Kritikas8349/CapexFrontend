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
    <div className="add-t-topright-navbar">
      <div className="add-t-referral-box">
        <span className="add-t-ref-link">{referralLink}</span>
        <FaCopy className="add-t-copy-icon" onClick={copyLink} />
        {showPopup && <div className="add-t-copy-popup">Link copied!</div>}
      </div>

      <div className="add-t-right-section">
        <button className="add-t-trade-btn btn btn-nav" onClick={goToTradePage}>
          Trade
        </button>

        <div className="add-t-user-dropdown" style={{ position: "relative" }}>
          <span className="add-t-username">{username}</span>
          <span
            className="add-t-dropdown-arrow"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
          </span>

          {dropdownOpen && (
            <div className="add-t-dropdown-menu">
              <Link
                to="/profile"
                onClick={() => setDropdownOpen(false)}
                className="add-t-dropdown-item"
              >
                Profile
              </Link>
              <Link
                to="/change-password"
                onClick={() => setDropdownOpen(false)}
                className="add-t-dropdown-item"
              >
                Change Password
              </Link>
              <Link
                to="/logout"
                onClick={() => setDropdownOpen(false)}
                className="add-t-dropdown-item"
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
