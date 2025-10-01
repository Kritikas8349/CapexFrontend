import React, { useState } from 'react';
  import { FiSearch } from 'react-icons/fi';
  import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
  import { HiOutlineMenu } from 'react-icons/hi';
  import { FaSearch } from "react-icons/fa";
  import "./About2.css";

  const About2 = () => {
    const [language, setLanguage] = useState("en");

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
      <div className="about2-container">
      {/* 🔵 Top Bar
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
  {/* <nav className="navbar">
    <div className="navbar-left">
      <img src="/public/logo.png" alt="Logo" className="navbar-logo" />
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

   
    <div
      className="hamburger-menu"
      onClick={() =>
        document.querySelector(".hamburger-overlay").classList.add("open")
      }
    >
      ☰
    </div>
  </nav> */}

  
  {/* <div className="hamburger-overlay">
    <div
      className="close-btn"
      onClick={() =>
        document.querySelector(".hamburger-overlay").classList.remove("open")
      }
    >
      ✖
    </div> */}

    {/* <ul className="overlay-links">
      <li>Quick Start</li>
      <li>Markets</li>
      <li>Platform</li>
      <li>Education</li>
      <li>About</li>
      <li>Support</li>
      <li><a href="#" className="refer-link">Refer a friends</a></li>
      <li><button className="login-btn">Log In</button></li>
      <li><button className="join-btn2">Join Now</button></li>
    </ul> */}

   
    {/* <div className="overlay-bottom-row">
      <span>Personal</span>
      <span>Partners</span>
      <span>Research</span>
      <span>Academy</span>
    </div>
  </div>  */}

    


       {/* 🏆 Hero Section */}
<section
  className="hero"
  style={{ backgroundImage: "url('/public/awards.jpg')" }}
>
  <div className="hero-content">
    <h1>Awards</h1>
    <p>
      Market.trad is a proud recipient of numerous awards and recognition
      for its exceptional service and commitment to the trading community.
    </p>
  </div>
</section>


        <div className="container">
    {/* Award 1 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 1" /></div>
      <div className="award-content">
        <h3 className="award-title">2025 <br /> Fast Execution Broker</h3>
        <p className="award-description">Market.trad recognised for ultra-low latency order speed.</p>
      </div>
    </div>

    {/* Award 2 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 2" /></div>
      <div className="award-content">
        <h3 className="award-title">2025 <br /> Best Forex Platform</h3>
        <p className="award-description">Honoured for trusted and competitive forex services.</p>
      </div>
    </div>

    {/* Award 3 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 3" /></div>
      <div className="award-content">
        <h3 className="award-title">2025 <br /> Investment Excellence</h3>
        <p className="award-description">Acknowledged for wide access to global assets & markets.</p>
      </div>
    </div>

    {/* Award 4 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 4" /></div>
      <div className="award-content">
        <h3 className="award-title">2025 <br /> Crypto Trading Tools</h3>
        <p className="award-description">Praised for advanced crypto tools like VPS & TradingView.</p>
      </div>
    </div>

    {/* Award 5 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 5" /></div>
      <div className="award-content">
        <h3 className="award-title">2025 <br /> Best Crypto Spreads</h3>
        <p className="award-description">Recognised for low-cost trading on BTC, ETH, and more.</p>
      </div>
    </div>

    {/* Award 6 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 6" /></div>
      <div className="award-content">
        <h3 className="award-title">2025 <br /> Best Scalping Broker</h3>
        <p className="award-description">Celebrated for efficiency and execution speed for scalpers.</p>
      </div>
    </div>

    {/* Award 7 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 7" /></div>
      <div className="award-content">
        <h3 className="award-title">2025 <br /> TradingView Integration</h3>
        <p className="award-description">Praised for seamless TradingView connectivity & usability.</p>
      </div>
    </div>

    {/* Award 8 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 8" /></div>
      <div className="award-content">
        <h3 className="award-title">2025 <br /> NZ Forex Leader</h3>
        <p className="award-description">Top-rated among FMA-regulated brokers in New Zealand.</p>
      </div>
    </div>

    {/* Award 9 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 9" /></div>
      <div className="award-content">
        <h3 className="award-title">2024 <br /> Best ECN Broker</h3>
        <p className="award-description">Recognised for transparent ECN trading conditions.</p>
      </div>
    </div>

    {/* Award 10 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 10" /></div>
      <div className="award-content">
        <h3 className="award-title">2024 <br /> Fastest Trade Execution</h3>
        <p className="award-description">Awarded at Dubai Expo for speed and reliability.</p>
      </div>
    </div>

    {/* Award 11 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 11" /></div>
      <div className="award-content">
        <h3 className="award-title">2024 <br /> Best Copy Trading</h3>
        <p className="award-description">Recognised for innovation in copy trading solutions.</p>
      </div>
    </div>

    {/* Award 12 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 12" /></div>
      <div className="award-content">
        <h3 className="award-title">2024 <br /> Growth Recognition</h3>
        <p className="award-description">Featured in Deloitte’s Master of Growth Index.</p>
      </div>
    </div>

    {/* Award 13 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 13" /></div>
      <div className="award-content">
        <h3 className="award-title">2023 <br /> Fast Execution Speeds</h3>
        <p className="award-description">Praised for low latency and reduced slippage trading.</p>
      </div>
    </div>

    {/* Award 14 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 14" /></div>
      <div className="award-content">
        <h3 className="award-title">2023 <br /> Best NZ Broker</h3>
        <p className="award-description">Rated for trust, platform quality, and service.</p>
      </div>
    </div>

    {/* Award 15 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 15" /></div>
      <div className="award-content">
        <h3 className="award-title">2023 <br /> Investment Excellence</h3>
        <p className="award-description">Recognised for broad market access worldwide.</p>
      </div>
    </div>

    {/* Award 16 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 16" /></div>
      <div className="award-content">
        <h3 className="award-title">2022 <br /> Global FX Broker</h3>
        <p className="award-description">Celebrated at Dubai Expo for trading innovation.</p>
      </div>
    </div>

    {/* Award 17 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 17" /></div>
      <div className="award-content">
        <h3 className="award-title">2022 <br /> Excellence in Trade</h3>
        <p className="award-description">Honoured at Auckland Awards for global trade success.</p>
      </div>
    </div>

    {/* Award 18 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 18" /></div>
      <div className="award-content">
        <h3 className="award-title">2021 <br /> Deloitte Fast 50</h3>
        <p className="award-description">Listed among NZ’s fastest-growing companies.</p>
      </div>
    </div>

    {/* Award 19 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 19" /></div>
      <div className="award-content">
        <h3 className="award-title">2020 <br /> Best NZ Forex Broker</h3>
        <p className="award-description">Recognised for service, spreads, and customer support.</p>
      </div>
    </div>

    {/* Award 20 */}
    <div className="award-card">
      <div className="award-icon"><img src="/public/awardlogo.avif" alt="Award 20" /></div>
      <div className="award-content">
        <h3 className="award-title">2019 <br /> Deloitte Fast 50</h3>
        <p className="award-description">Celebrated for consistent business growth.</p>
      </div>
    </div>
  </div>

  {/* <div className="paymentgrid">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
          <img src="/public/mastercard.png" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Pay" className="small-logo"/>
          <img src="/public/googlepay.png" alt="Google Pay" className="small-logo"/>
          <img src="/public/banktransfer.png" alt="Bank Transfer" />
          <img src="/public/crypto.png" alt="Crypto" />
          <img src="/public/neteller.png" alt="Neteller" />
          <img src="/public/skrill.png" alt="Skrill" />
          <img src="/public/Localbanktransfer.png" alt="Local Bank Transfer" />
          
        </div>

        
        <div className="hero-container1">
        <div className="hero-overlay1">
          <h1>
            Start trading in less than <span>5 minutes</span>
          </h1>
          <p>with no minimum deposit</p>

          <div className="search-box1">
              
              <input type="email" placeholder="    Email Address" />
              <button className="join-btn1">Join Now</button>
            </div>
        </div>
      </div>
    

      <div className="footercontainer">
          <div className="footertop">
            <div className="footerlogo">
              <img src="/public/logo2.png" alt="" />
            </div>
            <div className="footersocial">
              <a href="#"><img src="/public/facebook.png" alt="Facebook" /></a>
              <a href="#"><img src="/public/ri_linkedin-fill.png" alt="LinkedIn" /></a>
              <a href="#"><img src="/public/insta.png" alt="Instagram" /></a>
              <a href="#"><img src="/public/X.png" alt="X" /></a>
              <a href="#"><img src="/public/whatsapp.png" alt="WhatsApp" /></a>
              <a href="#"><img src="/public/name.png" alt="Telegram" /></a>
            </div>
          </div>

          <div className="footercontent">
            <div className="footersection">
              <h3>Markets</h3>
              <ul>
                <li>Markets Overview</li>
                <li>Forex</li>
                <li>Shares</li>
                <li>Commodities</li>
                <li>Futures</li>
                <li>Indices</li>
              </ul>
            </div>
            
            <div className="footersection">
              <h3>Platforms</h3>
              <ul>
                <li>TradingView</li>
                <li>cTrader</li>
                <li>MetaTrader 4</li>
                <li>MetaTrader 5</li>
                <li>MetaTrader Web Trader</li>
                <li>Markets.Trad Copy Trader</li>
                <li>Markets.Trad Invest</li>
                <li>Trading Tools</li>
              </ul>
            </div>
            
            <div className="footersection">
              <h3>Education</h3>
              <ul>
                <li>Education Hub</li>
                <li>Forex Tutorials</li>
                <li>Shares Tutorials</li>
                <li>Commodities Tutorials</li>
                <li>Trading Opportunities</li>
                <li>Economic Calendar</li>
                <li>Demo Trade</li>
              </ul>
            </div>

            <div className="footersection">
              <h3>About</h3>
              <ul>
                <li>About us</li>
                <li>Account Comparison</li>
                <li>Company News</li>
                <li>Compliance</li>
                <li>Careers</li>
              </ul>
            </div>

            <div className="footersection">
              <h3>Support</h3>
              <ul>
                <li>Platform Support</li>
                <li>Market Support</li>
                <li>Account Support</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="footersection">
              <h3>Legal</h3>
              <ul>
                <li>Legal Hub</li>
                <li>Risk Warning</li>
                <li>Privacy Policy</li>
                <li>Client Service Agreement</li>
                <li>Complaints Handling Procedure</li>
                <li>Confidentiality Policy</li>
                <li>Conflicts of Interests Policy</li>
                <li>Cookie Policy EU</li>
              </ul>
            </div>
          </div>

          <div className="footerbottom">
            <div className="footercontact">
              <p>Customer Support Contacts</p>
              <p>Whatsapp Support: +41 xxx xxx xxxx</p>
              <p>Support: +41 xxx xxx xxxx</p>
              <p>Email: support@market.trad.com</p>
            </div>
          </div>
        </div> */}
              
      </div>
    );
  };

  export default About2;