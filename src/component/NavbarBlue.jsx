import React, { useState, useEffect } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi"; // Import icons
import "./NavbarBlue.css";

function Navbar() {
  const [language, setLanguage] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "fr", label: "French" },
    { code: "de", label: "German" },
    { code: "es", label: "Spanish" },
    { code: "ja", label: "Japanese" },
  ];

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    alert(`Language changed to: ${e.target.value}`);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const dropdowns = {
    "Quick Start": [" Why Market.trad Markets?", "What assets can I trade?", "What platform can I trade on?", "What account type do you offer", "How to verify my account?", "How to deposite funds?", "How to withdraw funds?", "How can I start trading?", "Create Account"],
    Markets: ["Markets Overview", "Forex",
      { title: "Commodities", subItems: ["Energies", "Metals"] },
      { title: "Futures", subItems: ["Energy", "Indices", "Other"] },
      "Indices", "Crypto"],
    Platform: ["TradingView", "cTrade", "MetaTrade 4 (MT4)", "MetaTarde 5 (MT5)", "Market.trad CopyTrade", "Market.trad Invest"],
    Education: ["Education Hub", "Webinars",
      { title: "Forex Tutorials", subItems: ["Beginner Forex Tutorial", "Intermediate Forex Tutorial", "Advanced Forex Tutorial"] },
      { title: "Shares Tutorials", subItems: ["Beginner Shares Tutorials", "Intermediate Shares Tutorials", "Advanced Shares Tutorials"] },
      { title: "Commodities Tutorials", subItems: ["Beginner Commodities Tutorial", "Intermediate Commodities Tutorial", "Advanced Commodities Tutorial"] },
      "Economic Calendar",
      { title: "Research", subItems: [{ title: "Research Hub", subItems: ["Daily Market Analysis Snapshot", "Watch Upcoming Trading Opportunities", "Daily Insight Podcast"] }, "Trading Research", "Investment Research"] },
      "Demo Trade"],
    About: ["About Us", "Awarded by Industry", "About Comparison", "Company News", "Compliance", "Security of Funds"],
    Support: [
      { title: "Getting Started", subItems: ["How to create an account?", "How to verify your account?", "How to fund your account?", "How to link your trading platform?", "How to place your first trade?"] },
      { title: "Platform Support", subItems: ["Secure Client Area", "TradingView", "cTrade", "MetaTrade 4", "MetaTrade 5", { title: "Market.trad Invest", subItems: ["How to open a share investing account?", "How to fund your share investing account?", "How to install and log into Market.trad Invest?", "How to convert currency in a Cash Account?"] }] },
      { title: "Market Support", subItems: ["Trading Conditions", "Trading Hour Changes", "Contract Specifications", "Contract Expiries"] },
      "Account Support", "Education Hub", "Economic Calendar", "Contact Us"],
  };

  const renderMenu = (items) => (
    <ul>
      {items.map((item, i) =>
        typeof item === "string" ? (
          <li key={i}>{item}</li>
        ) : (
          <li key={i} className="has-submenu">
            {item.title} <FiChevronDown className="dropdown-icon" />
            {item.subItems && renderMenu(item.subItems)}
          </li>
        )
      )}
    </ul>
  );

  return (
    <div id="nav_main_blue">
      {/* Top bar */}
      <div className="top-bar-blue">
        <div className="top-left">Welcome to Market.trad</div>
        <div className="top-center">
          <input type="text" className="top-search" placeholder="Search..." />
        </div>
        <div className="top-right">
          <span className="top-link">Personal</span>
          <span className="top-link">Partners</span>
          <span className="top-link">Research</span>
          <span className="top-link">Academy</span>
          <select value={language} onChange={handleLanguageChange} className="language-select blue">
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.code.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar-blue">
        <div className="navbar-left">
          <img src="Frame 1.png" alt="Logo" className="navbar-logo" />
        </div>

        <div className="navbar-center">
          <ul className="nav-links">
            {Object.keys(dropdowns).map((menu) => (
              <li key={menu} className="dropdown">
                {menu} <FiChevronDown className="dropdown-icon" />
                {renderMenu(dropdowns[menu])}
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-right">
          <a href="#" className="refer-link">Refer a friends</a>
          <button className="login-btn">Log In</button>
          <button className="join-btn">Join Now</button>
        </div>

        {/* Hamburger */}
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
      </nav>

      {/* Hamburger Overlay */}
      <div className={`hamburger-overlay ${menuOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={() => setMenuOpen(false)}>✖</div>
        <ul className="overlay-links">
          {Object.keys(dropdowns).map((menu) => (
            <li key={menu} className="overlay-dropdown">
              {menu} <FiChevronRight className="dropdown-icon" />
              {renderMenu(dropdowns[menu])}
            </li>
          ))}
          <li><a href="#" className="refer-link">Refer a friends</a></li>
          <li><button className="login-btn">Log In</button></li>
          <li><button className="join-btn">Join Now</button></li>
        </ul>
        <div className="overlay-bottom-row">
          <span>Personal</span>
          <span>Partners</span>
          <span>Research</span>
          <span>Academy</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
