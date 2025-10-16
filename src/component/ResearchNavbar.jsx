import React, { useState, useEffect } from "react"; // ✅ added useEffect
import { Link } from "react-router-dom";
import { FiSearch, FiChevronDown, FiChevronUp, FiChevronRight } from "react-icons/fi"; // ✅ imported icons

import "./ResearchNavbar.css";
import routesMap from "../RoutesMap"; // make sure the path is correct


function ResearchNavbar() {
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
    "Daily News":[],
    "Equity Research": [
      "Australia",
      "New Zealand",
      "USA",
    ],
    "Technical Analysis": [],
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
    <ul className="dropdown-menu">
      {items.map((item, i) => {
        if (typeof item === "string") {
          return (
            <li key={i}>
              <Link to={routesMap[item] || "#"} className="nav-link">
                {item}
              </Link>
            </li>
          );
        }
  
        const hasRoute = routesMap[item.title]; // check if a route exists
  
        return (
          <li key={i} className="has-submenu">
            <Link
              to={hasRoute ? routesMap[item.title] : "#"}
              className="nav-link submenu-title"
              onClick={(e) => !hasRoute && e.preventDefault()} // only prevent if no route
            >
              {item.title} <FiChevronDown className="dropdown-icon" />
            </Link>
  
            {item.subItems && (
              <ul className="dropdown-submenu">
                {item.subItems.map((subItem, j) => {
                  if (typeof subItem === "string") {
                    return (
                      <li key={j}>
                        <Link to={routesMap[subItem] || "#"} className="nav-link">
                          {subItem}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={j} className="has-submenu">
                      <Link
                        to={routesMap[subItem.title] || "#"}
                        className="nav-link submenu-title"
                        onClick={(e) => e.preventDefault()}
                      >
                        {subItem.title} <FiChevronDown className="dropdown-icon" />
                      </Link>
                      {subItem.subItems && renderDropdown(subItem.subItems)}
                    </li>
                  );
                })}
              </ul>
            )}
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
        const key = typeof item === "string" ? `${parentKey}-${item}` : `${parentKey}-${item.title}`;
        const hasRoute = typeof item === "string" ? routesMap[item] : routesMap[item.title];
  
        if (typeof item === "string") {
          return (
            <li key={key}>
              <Link
                to={hasRoute || "#"}
                onClick={() => {
                  if (hasRoute) setMenuOpen(false); // close overlay on navigation
                }}
              >
                {item}
              </Link>
            </li>
          );
        }
  
        const handleClick = (e) => {
          if (item.subItems) {
            toggleMobileSubMenu(key); // toggle submenu
          }
          if (hasRoute) {
            setMenuOpen(false); // close overlay if navigating
          }
          if (!hasRoute && item.subItems) {
            e.preventDefault(); // prevent navigation if no route
          }
        };
  
        return (
          <li key={key} className={`has-submenu ${mobileOpenMenus[key] ? "open" : ""}`}>
            <div className="submenu-header">
              <Link
                to={hasRoute || "#"}
                className="submenu-title"
                onClick={handleClick}
              >
                {item.title}
              </Link>
              {item.subItems && (
                mobileOpenMenus[key] ? <FiChevronDown className="dropdown-icon" /> : <FiChevronRight className="dropdown-icon" />
              )}
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
    {routesMap[menu] ? (
      <Link to={routesMap[menu]} className="nav-link">
        {menu}
      </Link>
    ) : (
      <span className="nav-link">{menu}</span>
    )}
  
    {/* Show dropdown arrow if there are sub-items */}
    {dropdowns[menu].length > 0 && <FiChevronDown className="dropdown-icon" />}
  
    {/* Render dropdown items */}
    {dropdowns[menu].length > 0 && renderDropdown(dropdowns[menu])}
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
     <div className={`res-hamburger-overlay ${menuOpen ? "open" : ""}`}>
  <div className="res-close-btn" onClick={() => setMenuOpen(false)}>
    ✖
  </div>

  <ul className="res-overlay-links">
  {Object.keys(dropdowns).map((menu) => (
  <li key={menu} className={`res-has-submenu ${mobileOpenMenus[menu] ? "open" : ""}`}>
    {dropdowns[menu].length > 0 ? (
      <div className="res-submenu-header" onClick={() => toggleMobileSubMenu(menu)}>
        {menu} <FiChevronRight className="res-dropdown-icon" />
      </div>
    ) : (
      <Link
        to={routesMap[menu] || "#"}
        onClick={() => setMenuOpen(false)}
        className="res-submenu-header"
      >
        {menu}
      </Link>
    )}

    {dropdowns[menu].length > 0 && mobileOpenMenus[menu] && renderOverlayMenuRecursive(dropdowns[menu], menu)}
  </li>
))}


    <li>
      <a href="#" className="res-refer-link">Refer a friends</a>
    </li>
    <li>
      <button className="res-login-btn">Log In</button>
    </li>
    <li>
      <button className="res-join-bttnn">Join Now</button>
    </li>
  </ul>

  <div className="res-overlay-bottom-row">
    <Link to="/" onClick={() => setMenuOpen(false)}>Personal</Link>
    <Link to="/partners" onClick={() => setMenuOpen(false)}>Partners</Link>
    <Link to="/research" onClick={() => setMenuOpen(false)}>Research</Link>
  </div>
</div>




    </div>
  );
}

export default ResearchNavbar;
