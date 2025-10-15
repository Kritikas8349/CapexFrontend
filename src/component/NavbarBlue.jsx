  // NavbarBlue.jsx
  import React, { useState, useEffect } from "react";
  import { Link } from "react-router-dom"; // ✅ React Router Link
  import { FiChevronDown, FiChevronRight, FiChevronUp, FiSearch } from "react-icons/fi";
  import "./NavbarBlue.css";
  import { routesMap } from "../RoutesMap"; // adjust path as needed

  function NavbarBlue() {
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
      "Quick Start": [
        "Why Market.trad Markets?",
        "What assets can I trade?",
        "What platform can I trade on?",
        "What account type do you offer",
        "How to verify my account?",
        "How to deposite funds?",
        "How to withdraw funds?",
        "How can I start trading?",
        "Create Account",
      ],
      Markets: [
        "Markets Overview",
        "Forex",
        "Equities",
        { title: "Commodities", subItems: ["Energies", "Metals"] },
        { title: "Futures", subItems: ["Energy", "Indices", "Other"] },
        "Indices",
        "Crypto",
      ],
      Platform: [
        "Trading View",
        "cTrade",
        "MetaTrade 4 (MT4)",
        "MetaTarde 5 (MT5)",
        "Market.trad CopyTrade",
        { title: "Trading Tools", subItems: ["VPS Trading", "Fix API Trading", "Zulu Trade", "Myfxbook"] },
      ],
      Education: [
        "Education Hub",
        "Webinars",
        {
          title: "Forex Tutorials",
          subItems: [
            "Beginner Forex Tutorial",
            "Intermediate Forex Tutorial",
            "Advanced Forex Tutorial",
          ],
        },
        {
          title: "Shares Tutorials",
          subItems: [
            "Beginner Shares Tutorials",
            "Intermediate Shares Tutorials",
            "Advanced Shares Tutorials",
          ],
        },
        {
          title: "Commodities Tutorials",
          subItems: [
            "Beginner Commodities Tutorial",
            "Intermediate Commodities Tutorial",
            "Advanced Commodities Tutorial",
          ],
        },
        "Economic Calendar",
        {
          title: "Research",
          subItems: [
            {
              title: "Research Hub",
              subItems: [
                "Daily Market Analysis Snapshot",
                "Watch Upcoming Trading Opportunities",
                "Daily Insight Podcast",
              ],
            },
            "Trading Research",
            "Investment Research",
          ],
        },
        "Demo Trade",
      ],
      About: [
        "About Us",
        "Awarded by Industry",
        "About Comparison",
        "Company News",
        "Compliance",
        "Security of Funds",
      ],
      Support: [
        {
          title: "Getting Started",
          subItems: [
            "How to create an account?",
            "How to verify your account?",
            "How to fund your account?",
            "How to link your trading platform?",
            "How to place your first trade?",
          ],
        },
        {
          title: "Platform Support",
          subItems: [
            "Secure Client Area",
            "TradingView",
            "c-Trade",
            "MetaTrade 4",
            "MetaTrade 5",
            {
              title: "Market.trad Invest",
              subItems: [
                "How to open a share investing account?",
                "How to fund your share investing account?",
                "How to install and log into Market.trad Invest?",
                "How to convert currency in a Cash Account?",
              ],
            },
          ],
        },
        {
          title: "Market Support",
          subItems: [
            "Trading Conditions",
            "Trading Hour Changes",
            "Contract Specifications",
            "Contract Expiries",
          ],
        },
        "Account Support",
        "Education Hub",
        "Economic Calendar",
        "Contact Support",
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
      <div id="nav_main_blue">
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
                <option key={lang.code} value={lang.code}>{lang.code.toUpperCase()}</option>
              ))}
            </select>
          </div>
        </div>
  
        {/* Navbar */}
        {showNavbar && (
          <nav className="navbar-blue">
            <div className="navbar-left">
              {window.innerWidth > 768 && <img src="/Frame 1.png" alt="Logo" className="navbar-logo" />}
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
              <a href="#" className="refer-link">Refer a friends</a>
              <Link to="/loginform" className="login-btn">Log In</Link>
              <Link to="/create-account" className="join-btn">Join Now</Link>
            </div>
            <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
          </nav>
        )}



        
 <div className={`hamburger-overlay ${menuOpen ? "open" : ""}`}>
  <div className="close-btn" onClick={() => setMenuOpen(false)}>✖</div>

  <ul className="overlay-links">
  {Object.keys(dropdowns).map((menu) => {
    const hasSubmenu = dropdowns[menu] && dropdowns[menu].length > 0;

    return (
      <li key={menu} className={`has-submenu ${mobileOpenMenus[menu] ? "open" : ""}`}>
        {/* Make parent clickable if it has a route */}
        {routesMap[menu] ? (
          <Link
            to={routesMap[menu]}
            className="submenu-header"
            onClick={() => setMenuOpen(false)}
          >
            {menu} {hasSubmenu && <FiChevronRight className="dropdown-icon" />}
          </Link>
        ) : (
          <div className="submenu-header" onClick={() => hasSubmenu && toggleMobileSubMenu(menu)}>
            {menu} {hasSubmenu && <FiChevronRight className="dropdown-icon" />}
          </div>
        )}

        {hasSubmenu && mobileOpenMenus[menu] && renderOverlayMenuRecursive(dropdowns[menu], menu)}
      </li>
    );
  })}

  {/* Login & Join buttons */}
  <li>
    <Link to="/loginform" className="login-btn" onClick={() => setMenuOpen(false)}>Log In</Link>
  </li>
  <li>
    <Link to="/create-account" className="join-bttn" onClick={() => setMenuOpen(false)}>Join Now</Link>
  </li>

  {/* Personal / Partners / Research links */}
  <li className="overlay-bottom-row">
    <Link to="/" onClick={() => setMenuOpen(false)}>Personal</Link>
    <Link to="/partners" onClick={() => setMenuOpen(false)}>Partner</Link>
    <Link to="/research" onClick={() => setMenuOpen(false)}>Research</Link>
  </li>
</ul>

</div>



      </div>
    );
  }
  export default NavbarBlue;
