import React, { useState } from "react";
import "./Navbar1.css";

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

    return (
        <div id="nav_main">
            {/* 🔝 Top bar */}
            <div className="top-bar">
                <div className="top-left">Welcome to Market.trad</div>

                <div className="top-center">
                    <input type="text" className="top-search" placeholder="Search..." />
                </div>

                <div className="top-right">
                    <span className="top-link">Personal</span>
                    <span className="top-link">Partners</span>
                    <span className="top-link">Research</span>
                    <span className="top-link">Academy</span>
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className="language-select blue"
                    >
                        {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                                {lang.code.toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* 🔳 Navbar */}
            <nav className="navbar">
                <div className="navbar-left">
                    <img src="Frame 1.png" alt="Logo" className="navbar-logo" />
                </div>

                <div className="navbar-center">
                    <ul className="nav-links">
                        <li>Quick Start</li>
                        <li>Markets</li>
                        <li>Platform</li>
                        <li>Education</li>
                        <li>About</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <a href="#" className="refer-link">Refer a friends</a>
                    <button className="login-btn">Log In</button>
                    <button className="join-btn2">Join Now</button>
                </div>

                {/* 🍔 Hamburger */}
                <div className="hamburger-menu" onClick={() => setMenuOpen(true)}>
                    ☰
                </div>
            </nav>

            {/* 📂 Fullscreen Overlay Menu */}
            <div className={`hamburger-overlay ${menuOpen ? "open" : ""}`}>
                <div className="close-btn" onClick={() => setMenuOpen(false)}>✖</div>

                <ul className="overlay-links">
                    <li>Quick Start</li>
                    <li>Markets</li>
                    <li>Platform</li>
                    <li>Education</li>
                    <li>About</li>
                    <li>Support</li>
                    <li><a href="#" className="refer-link">Refer a friends</a></li>
                    <li><button className="login-btn">Log In</button></li>
                    <li><button className="join-btn2">Join Now</button></li>
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
