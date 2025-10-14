import React, { useState, useEffect } from "react"; // ✅ added useEffect
import { Link } from "react-router-dom";
import { FiSearch, FiChevronDown, FiChevronUp, FiChevronRight } from "react-icons/fi"; // ✅ imported icons

import "./PartnerNavbar.css";
import routesMap from "../RoutesMap"; // make sure the path is correct


function PartnerNavbar() {
  const [language, setLanguage] = useState("en");
    const [menuOpen, setMenuOpen] = useState(false);
    const [openMenus, setOpenMenus] = useState({});
    const [showNavbar, setShowNavbar] = useState(true);
    const [mobileOpenMenus, setMobileOpenMenus] = useState({});

  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "Hindi" },
    { code: "fr", label: "French" },
    { code: "de", label: "German" },
    { code: "es", label: "Spanish" },
    { code: "ja", label: "Japanese" },
  ];

  const dropdowns = {
    "Affiliates": [
      "Affiliates Overview",
      {title:"CPA Structures", subItems: ["CPA Payment structure", "Multi-step payment structure", "Partner Tiers"]},
      "Sub-Affiliates",
      "Example Review",
      "Affiliates Support",
    ],
    "IB Program": [
      "IB Overview",
      { title: "Broker Models", subItems: ["Regional Representatives"] },
      "Marketing Materials",
      "IBs Support",
    ],
    About: [
      "AboutUs",
      "Compliances",
      "Partner Blog",
      { title: "Legal Hub", subItems: ["Partner Terms", "Legal Compliance", "Verifications & Payments"] },
    ],
    Support: [
      "Affiliates Supports",
      "IBs Supports",
      "Brand Guidelines",
      "Contact us",
    ],
  };

  const handleLanguageChange = (e) => setLanguage(e.target.value);

  const toggleSubMenu = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    const handleScroll = () => setShowNavbar(window.scrollY <= 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const renderDropdown = (items) => (
    <ul>
      {items.map((item, i) => {
        if (typeof item === "string") {
          return (
            <li key={i}>
              {routesMap[item] ? (
                <Link to={routesMap[item]} onClick={(e) => e.stopPropagation()} className="nav-link">
                  {item}
                </Link>
              ) : (
                <span className="nav-link">{item}</span>
              )}
              {dropdowns[item] && (
                <button
                  className="dropdown-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSubMenu(item);
                  }}
                >
                  {openMenus[item] ? <FiChevronUp /> : <FiChevronDown />}
                </button>
              )}
              {openMenus[item] && renderDropdown(dropdowns[item])}
            </li>
          );
        }

        return (
          <li key={i} className="has-submenu">
            {routesMap[item.title] ? (
              <Link to={routesMap[item.title]} onClick={(e) => e.stopPropagation()} className="nav-link">
                {item.title}
              </Link>
            ) : (
              <span className="nav-link">{item.title}</span>
            )}
            <button
              className="dropdown-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleSubMenu(item.title);
              }}
            >
              {openMenus[item.title] ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {item.subItems && openMenus[item.title] && renderDropdown(item.subItems)}
          </li>
        );
      })}
    </ul>
  );

  const toggleMobileSubMenu = (key) => {
    setMobileOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getMenuKey = (parentKey, title) => (parentKey ? `${parentKey}-${title}` : title);

  const renderOverlayMenuRecursive = (items, parentKey = "") => (
    <ul className="overlay-submenu">
      {items.map((item) => {
        const key = typeof item === "string" ? getMenuKey(parentKey, item) : getMenuKey(parentKey, item.title);
        if (typeof item === "string") {
          return (
            <li key={key}>
              {routesMap[item] ? (
                <Link to={routesMap[item]} onClick={() => setMenuOpen(false)}>
                  {item}
                </Link>
              ) : (
                <span>{item}</span>
              )}
            </li>
          );
        }
        return (
          <li key={key} className={`has-submenu ${mobileOpenMenus[key] ? "open" : ""}`}>
            <div className="submenu-header" onClick={() => toggleMobileSubMenu(key)}>
              {item.title} <FiChevronRight className="dropdown-icon" />
            </div>
            {item.subItems && mobileOpenMenus[key] && renderOverlayMenuRecursive(item.subItems, key)}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div id="nav_main_blue ">
      {/* Top bar */}
      <div className="top-bar-blue">
        <div className="top-left">Welcome to Market.trad</div>
        <div className="top-center">
          <div className="top-search-wrapper">
            <FiSearch className="search-icon" />
            <input type="text" className="top-search" placeholder="Search..." />
          </div>
        </div>
        <div className="top-right">
        <Link to="/" className="top-link">Personal</Link>
        <Link to="/partners" className="top-link">Partners</Link>
        <Link to="/research" className="top-link">Research</Link>
        

          <select value={language} onChange={handleLanguageChange} className="language-select blue">
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.code.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Navbar */}
      {showNavbar && (
        <nav className="navbar-blue">
          <div className="navbar-left">
            <img src="/Frame 1.png" alt="Logo" className="navbar-logo" />
          </div>
          <div className="navbar-center">
            <ul className="nav-links">
              {Object.keys(dropdowns).map((menu) => (
                <li key={menu} className="dropdown">
                  {menu} <FiChevronDown className="dropdown-icon" />
                  {renderDropdown(dropdowns[menu])}
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-right">
            <a href="#" className="refer-link">
              Refer a friends
            </a>
            <Link to="/loginform" className="login-btn">Log In</Link>
            <Link to="/create-account" className="join-btn">Join Now</Link>
          </div>
          <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </nav>
      )}

    {/* Hamburger overlay */}
{/* Hamburger overlay */}
     {/* Hamburger overlay */}
<div className={`part-hamburger-overlay ${menuOpen ? "open" : ""}`}>
  <div className="part-close-btn" onClick={() => setMenuOpen(false)}>
    ✖
  </div>

  <ul className="part-overlay-links">
    {Object.keys(dropdowns).map((menu) => (
      <li key={menu} className={`part-has-submenu ${mobileOpenMenus[menu] ? "open" : ""}`}>
        <div className="part-submenu-header" onClick={() => toggleMobileSubMenu(menu)}>
          {menu} <FiChevronRight className="part-dropdown-icon" />
        </div>
        {mobileOpenMenus[menu] && renderOverlayMenuRecursive(dropdowns[menu], menu)}
      </li>
    ))}

    <li>
      <a href="#" className="part-refer-link">Refer a friends</a>
    </li>
    <li>
      <button className="part-login-btn">Log In</button>
    </li>
    <li>
      <button className="part-join-bttnn">Join Now</button>
    </li>
  </ul>

  <div className="part-overlay-bottom-row">
    <Link to="/" onClick={() => setMenuOpen(false)}>Personal</Link>
    <Link to="/partners" onClick={() => setMenuOpen(false)}>Partners</Link>
    <Link to="/research" onClick={() => setMenuOpen(false)}>Research</Link>
  </div>
</div>



    </div>
  );
}

export default PartnerNavbar;
